<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <main id="wedding-design-system">
    <div v-if="!!assetToDisplay">
      <img
        v-if="assetToDisplay.type === 'image'"
        id="preview"
        :src="assetToDisplay.src"
      />
      <Animation
        v-if="assetToDisplay.type === 'animation'"
        :animate="true"
        :reduce-at-the-end="false"
        @animationOver="goToNextAsset"
      />
    </div>
  </main>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import Animation from '~/components/mariage/00_shared/animation/animation.vue'

export default {
  components: {
    Animation,
  },
  layout: 'mariage',
  data: () => {
    return {
      assetToDisplay: {
        type: 'animation',
      },

      firebaseApp: null,
      firebaseStorage: null,
      listRef: null,
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
  mounted() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDd9LsguBACesKqNbIXaYCV9CDVY2TIga8',
      authDomain: 'mariage-88c97.firebaseapp.com',
      projectId: 'mariage-88c97',
      storageBucket: 'mariage-88c97.appspot.com',
      messagingSenderId: '590464781182',
      appId: '1:590464781182:web:662160725231da84e4412f',
    }

    this.firebaseApp = initializeApp(firebaseConfig)
    this.firebaseStorage = getStorage(this.firebaseApp)
    this.listRef = ref(this.firebaseStorage, '/photos')

    /**
     * Choix d'affichage des images :
     *   - Toutes les 20 secondes l'image change
     *   - En priorité c'est l'image qui a été le moins de fois affiché qui prends le dessus
     *   - Au cas où 2 images ont été affiché autant de fois, c'est un tirage au sort qui est effectué pour savoir laquel afficher
     *   - L'annimation est considéré comme une image.
     */
  },
  methods: {
    async goToNextAsset() {
      const viewList = await this.updateViewListFromFirestore()
      const nextAssetToDisplay = this.selectAssetToDisplay(viewList)
      this.downloadAndDisplayTheAsset(nextAssetToDisplay)
    },
    async updateViewListFromFirestore() {
      try {
        const fileList = await listAll(this.listRef)
        const oldViewList = JSON.parse(
          localStorage.getItem('wedding-asset-displayer') ?? '{}'
        )
        this.viewList = fileList.items.reduce(
          (viewList, item) => {
            return {
              ...viewList,
              [item._location.path_]: oldViewList[item._location.path_] ?? 0,
            }
          },
          {
            animation: oldViewList.animation ?? 0,
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
    selectAssetToDisplay(viewList) {
      try {
        const lowestNbOfViewValue = Math.min(...Object.values(viewList))
        const assetWithTheLowestNbOfView = Object.entries(viewList)
          .filter(([, value]) => value === lowestNbOfViewValue)
          .map(([key]) => key)
        return assetWithTheLowestNbOfView[
          Math.floor(Math.random() * assetWithTheLowestNbOfView.length)
        ]
      } catch (err) {
        console.error(err)
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
    async downloadAndDisplayTheAsset(asset) {
      if (asset === 'animation') {
        this.assetToDisplay = {
          type: 'animation',
        }
        return
      }

      let assetSrc
      try {
        const assetRef = await ref(this.firebaseStorage, asset)
        assetSrc = await getDownloadURL(assetRef)
        console.log({ assetSrc, assetRef })
      } catch (err) {
        console.error(err)
      }

      this.isImageLoaded(assetSrc)
        .then(() => {
          this.assetToDisplay = {
            type: 'image',
            src: assetSrc,
          }
          setTimeout(() => this.goToNextAsset(), 20000)
        })
        .catch(console.error)
    },
  },
}
</script>

<style scoped>
#wedding-design-system {
  background-color: var(--color-background-strong);
  width: 100%;
  min-height: 100%;
}

.asset {
  object-fit: cover;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>
