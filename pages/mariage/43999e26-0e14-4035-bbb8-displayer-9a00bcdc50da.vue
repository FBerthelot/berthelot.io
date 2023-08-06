<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <main id="wedding-asset-displayer">
    <img
      v-if="assetOfDisplayer1.type === 'image'"
      :class="{ asset: true, 'current-asset': currentAssetDisplayer === 1 }"
      :src="assetOfDisplayer1.src"
    />
    <Animation
      v-if="assetOfDisplayer1.type === 'animation'"
      :class="{
        anime: true,
        asset: true,
        'current-asset': currentAssetDisplayer === 1,
      }"
      :animate="currentAssetDisplayer === 1"
      :reduce-at-the-end="false"
    />

    <img
      v-if="assetOfDisplayer2.type === 'image'"
      :class="{ asset: true, 'current-asset': currentAssetDisplayer === 2 }"
      :src="assetOfDisplayer2.src"
    />
    <Animation
      v-if="assetOfDisplayer2.type === 'animation'"
      :class="{
        anime: true,
        asset: true,
        'current-asset': currentAssetDisplayer === 2,
      }"
      :animate="currentAssetDisplayer === 2"
      :reduce-at-the-end="false"
    />
  </main>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import Animation from '~/components/mariage/00_shared/animation/animation.vue'

/**
 * @typedef {Object} AssetAnnimation
 * @property {'animation'} type
 * @property {'animation'} firebaseLocation
 * @property {true} loaded
 * @property {number} viewedTimes
 */
/**
 * @typedef {Object} AssetImage
 * @property {'image'} type
 * @property {string=} src
 * @property {string} firebaseLocation
 * @property {boolean} loaded
 * @property {number} viewedTimes
 */
/**
 * @typedef {AssetAnnimation | AssetImage } Asset
 */

export default {
  components: {
    Animation,
  },
  layout: 'mariage',
  data: () => {
    return {
      /**
       * @type {Asset}
       */
      assetOfDisplayer1: {
        type: 'animation',
        firebaseLocation: 'animation',
        loaded: true,
      },
      /**
       * @type {Asset}
       */
      assetOfDisplayer2: {
        type: 'animation',
        firebaseLocation: 'animation',
        loaded: true,
      },

      /**
       * @type {Record<string, number>}
       */
      viewList: null,

      currentAssetDisplayer: 1,

      firebaseApp: null,
      firebaseStorage: null,
      listRef: null,

      transitionTimeout: null,
      switchingAssetTimeout: null,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Mariage Agnès et Florent - 19 Août 2022`,
    }
  },

  computed: {
    /**
     * @returns {Asset}
     */
    currentAssetDisplayed() {
      return this[`assetOfDisplayer${this.currentAssetDisplayer}`]
    },
    nextAssetToDisplay() {
      return this[`assetOfDisplayer${this.currentAssetDisplayer === 1 ? 2 : 1}`]
    },
  },

  mounted() {
    const firebaseConfig = {
      apiKey: this.$config.FIREBASE_API_KEY,
      authDomain: this.$config.FIREBASE_AUTH_DOMAIN,
      projectId: this.$config.FIREBASE_PROJECT_ID,
      storageBucket: this.$config.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: this.$config.FIREBASE_MESSAGING_SENDER_ID,
      appId: this.$config.FIREBASE_APP_ID,
    }

    this.firebaseApp = initializeApp(firebaseConfig)
    this.firebaseStorage = getStorage(this.firebaseApp)
    this.listRef = ref(this.firebaseStorage, '/photos')

    this.onEndOfTransitionBetweenAsset()

    document.onkeydown = (e) => {
      if (e.key === ' ') {
        this.switchingAsset()
      }
    }

    /**
     * Choix d'affichage des images :
     *   - Toutes les 20 secondes l'image change
     *   - En priorité c'est l'image qui a été le moins de fois affiché qui prends le dessus
     *   - Au cas où 2 images ont été affiché autant de fois, c'est un tirage au sort qui est effectué pour savoir laquel afficher
     *   - L'annimation est considéré comme une image.
     */
  },
  methods: {
    switchingAsset() {
      console.log('switching')
      if (this.switchingAssetTimeout) {
        clearTimeout(this.switchingAssetTimeout)
      }
      if (this.transitionTimeout) {
        clearTimeout(this.transitionTimeout)
      }
      this.currentAssetDisplayer = this.currentAssetDisplayer === 1 ? 2 : 1

      this.switchingAssetTimeout = setTimeout(() => {
        this.onEndOfTransitionBetweenAsset()
      }, 5000)
    },
    async onEndOfTransitionBetweenAsset() {
      if (this.switchingAssetTimeout) {
        clearTimeout(this.switchingAssetTimeout)
      }
      if (this.transitionTimeout) {
        clearTimeout(this.transitionTimeout)
      }

      await this.updateViewListFromFirestore()
      this.selectNextAssetToDisplay()
      await this.preloadNextAssetToDisplay()

      this.transitionTimeout = setTimeout(() => {
        this.switchingAsset()
      }, 20000)
    },

    async updateViewListFromFirestore() {
      try {
        const fileList = await listAll(this.listRef)
        const oldViewList = JSON.parse(
          localStorage.getItem('wedding-asset-displayer') ?? '{}'
        )
        const currentAnimationNbOfView = oldViewList.animation ?? 0

        this.viewList = fileList.items.reduce(
          (viewList, item) => {
            const isCurrentAsset =
              this.currentAssetDisplayed.firebaseLocation ===
              item._location.path_

            const currentNbOfView = oldViewList[item._location.path_] ?? 0

            return {
              ...viewList,
              [item._location.path_]: isCurrentAsset
                ? currentNbOfView + 1
                : currentNbOfView,
            }
          },
          {
            animation:
              this.currentAssetDisplayed.type === 'animation'
                ? currentAnimationNbOfView + 1
                : currentAnimationNbOfView,
          }
        )
        localStorage.setItem(
          'wedding-asset-displayer',
          JSON.stringify(this.viewList)
        )
        return this.viewList
      } catch (err) {
        console.error(err)
      }
    },
    selectNextAssetToDisplay() {
      const viewListWithExcludedCurrentElement = Object.fromEntries(
        Object.entries(this.viewList).filter(
          ([key]) => key !== this.currentAssetDisplayed.firebaseLocation
        )
      )
      const lowestNbOfViewValue = Math.min(
        ...Object.values(viewListWithExcludedCurrentElement)
      )
      const assetWithTheLowestNbOfView = Object.entries(
        viewListWithExcludedCurrentElement
      )
        .filter(([, value]) => value === lowestNbOfViewValue)
        .map(([key]) => key)

      const nextItemPath =
        assetWithTheLowestNbOfView[
          Math.floor(Math.random() * assetWithTheLowestNbOfView.length)
        ]

      this[`assetOfDisplayer${this.currentAssetDisplayer === 1 ? 2 : 1}`] =
        nextItemPath === 'animation'
          ? {
              type: 'animation',
              firebaseLocation: 'animation',
              loaded: true,
              viewedTimes: lowestNbOfViewValue,
            }
          : {
              type: 'image',
              loaded: false,
              viewedTimes: lowestNbOfViewValue,
              firebaseLocation: nextItemPath,
            }
    },
    isImageLoaded(src) {
      return new Promise((resolve, reject) => {
        let isTimeouted = false
        const timeout = setTimeout(() => {
          isTimeouted = true
          resolve()
        }, 20000)
        const image = document.createElement('img')
        image.onload = () => {
          if (!isTimeouted) {
            resolve()
            clearTimeout(timeout)
          }
        }
        image.onerror = (err) => {
          reject(err)
        }
        image.src = src
      })
    },
    async preloadNextAssetToDisplay() {
      console.log(
        'preloadNextAssetToDisplay',
        this.nextAssetToDisplay.type,
        this.nextAssetToDisplay.firebaseLocation
      )
      if (this.nextAssetToDisplay.type === 'animation') {
        return
      }

      let assetSrc
      try {
        const assetRef = await ref(
          this.firebaseStorage,
          this.nextAssetToDisplay.firebaseLocation
        )
        assetSrc = await getDownloadURL(assetRef)
      } catch (err) {
        console.error(err)
      }

      this.isImageLoaded(assetSrc)
        .then(() => {
          this[`assetOfDisplayer${this.currentAssetDisplayer === 1 ? 2 : 1}`] =
            {
              ...this[
                `assetOfDisplayer${this.currentAssetDisplayer === 1 ? 2 : 1}`
              ],
              src: assetSrc,
              loaded: true,
            }
        })
        .catch(console.error)
    },
  },
}
</script>

<style scoped>
#wedding-asset-displayer {
  background-color: var(--color-background-strong);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.asset {
  object-fit: contain;
  overflow: hidden;
  height: 0;
  width: 0;
  transition: all 5s ease;
  transform: rotate(0);

  position: absolute;
  top: 50%;
  left: 50%;
}

.current-asset {
  height: 100vh;
  width: 100vw;

  transform: rotate(360deg);
  z-index: 1;

  top: 0;
  left: 0;
}

.anime {
  transform: rotate(360deg);
}
</style>
