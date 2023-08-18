<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <main id="wedding-design-system">
    <h1 class="title typography-title-2">Partage de photos et vidéos</h1>

    <form @submit.prevent="handleUploadingPhoto">
      <img v-if="!assets.length" class="background-img" :src="Logo" alt="" />
      <section v-if="!!assets.length" class="preview-container">
        <article
          v-for="asset in assets"
          :key="asset.firestoreUrl"
          class="preview-item"
        >
          <img class="preview-img" :src="asset.objectUrl" alt="" />
          <div
            v-if="['starting', 'running', 'paused'].includes(asset.status)"
            class="preview-progression-container"
          >
            <span class="typography-paragraph">{{
              asset.status === 'paused' ? 'En pause' : 'En cours'
            }}</span>
            <progress
              class="preview-progression"
              max="100"
              :value="asset.uploadPct"
            />
          </div>
          <div
            v-if="asset.status === 'error'"
            class="preview-progression-container"
          >
            Une erreur est survenu.
            {{ asset.error.message }}
          </div>
          <div
            v-if="asset.status === 'success'"
            class="preview-progression-container"
          >
            Chargé ! 🎉
          </div>
        </article>
      </section>

      <div class="action">
        <input
          id="imageUpload"
          type="file"
          accept="video/*,image/*"
          multiple
          @change="handleImageChange"
        />
        <label
          for="imageUpload"
          :class="{ noAnimate: isCaptureSupported, button: true }"
        >
          <img alt="" :src="UploadIcon" />
          Partager photos &amp; vidéos
        </label>

        <input
          v-if="isCaptureSupported"
          id="imageInput"
          type="file"
          accept="image/*,video/*"
          capture="user"
          multiple
          @change="handleImageChange"
        />
        <label v-if="isCaptureSupported" for="imageInput" class="button">
          <img alt="" :src="PhotoIcon" />
          Prendre une photo
        </label>
      </div>
    </form>
  </main>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getStorage, uploadBytesResumable, ref } from 'firebase/storage'
import Logo from '~/components/mariage/00_shared/logo/logo-06.svg'
import PhotoIcon from '~/components/mariage/00_shared/assets/photo.svg'
import UploadIcon from '~/components/mariage/00_shared/assets/telecharger.png'

export default {
  layout: 'mariage',
  data: () => {
    return {
      assets: [],
      Logo,
      firebaseApp: null,
      firebaseStorage: null,

      PhotoIcon,
      UploadIcon,

      isCaptureSupported: false,
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
      apiKey: this.$config.FIREBASE_API_KEY,
      authDomain: this.$config.FIREBASE_AUTH_DOMAIN,
      projectId: this.$config.FIREBASE_PROJECT_ID,
      storageBucket: this.$config.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: this.$config.FIREBASE_MESSAGING_SENDER_ID,
      appId: this.$config.FIREBASE_APP_ID,
    }
    this.firebaseApp = initializeApp(firebaseConfig)
    this.firebaseStorage = getStorage(this.firebaseApp)

    const el = document.createElement('input')
    this.isCaptureSupported = el.capture === undefined
  },
  methods: {
    handleImageChange(e) {
      this.assets = [
        ...this.assets,
        ...Array.from(e.target.files)
          .map((file) => {
            const firestoreUrl = `/photos/${file.lastModified}-${file.name}`

            if (
              this.assets.find((asset) => asset.firestoreUrl === firestoreUrl)
            ) {
              return null
            }

            return {
              firestoreUrl,
              objectUrl: URL.createObjectURL(file),
              rawFile: file,
              status: 'starting',
              uploadPct: 0,
            }
          })
          .filter(Boolean),
      ]

      this.assets
        .filter((asset) => asset.status === 'starting')
        .forEach((asset) => {
          this.uploadOnePhoto(asset)
        })
    },
    uploadOnePhoto(asset) {
      const storageRef = ref(this.firebaseStorage, asset.firestoreUrl)
      const uploadTask = uploadBytesResumable(storageRef, asset.rawFile, {
        customMetadata: {
          userAgent: window.navigator.userAgent,
          lastModified: asset.rawFile.lastModified,
          lastModifiedDate: asset.rawFile.lastModifiedDate?.toISOString(),
          originalName: asset.rawFile.name,
        },
      })

      this.assets = this.assets.map((a) => {
        if (asset.firestoreUrl === a.firestoreUrl) {
          return {
            ...a,
            status: 'running',
          }
        }
        return a
      })

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          this.assets = this.assets.map((a) => {
            if (asset.firestoreUrl === a.firestoreUrl) {
              return {
                ...a,
                status: snapshot.state, // "canceled" | "running" | "paused" | "success" | "error"
                uploadPct:
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
              }
            }
            return a
          })
        },
        (error) => {
          this.assets = this.assets.map((a) => {
            if (asset.firestoreUrl === a.firestoreUrl) {
              return {
                ...a,
                status: 'error',
                error,
              }
            }
            return a
          })
        },
        () => {
          this.assets = this.assets.map((a) => {
            if (asset.firestoreUrl === a.firestoreUrl) {
              return {
                ...a,
                status: 'success',
              }
            }
            return a
          })
        }
      )
    },
    handleUploadingPhoto() {},
  },
}
</script>

<style scoped>
#wedding-design-system {
  background-color: var(--color-background-strong);
  width: 100%;
  height: 100%;
}

.title {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.background-img {
  width: 75%;
  margin-bottom: 1rem;
}

.action {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

#imageUpload + label.noAnimate {
  animation: none;
}

#imageInput,
#imageUpload {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

#imageInput + label,
#imageUpload + label {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  cursor: pointer;
  animation: blink 1s infinite alternate;
}
#imageInput + label {
  animation-delay: 0.5s;
}

#imageInput + label:hover,
#imageInput + label:focus,
#imageUpload + label:hover,
#imageUpload + label:focus {
  background-color: var(--color-primary);
  color: var(--color-white);
}

#imageUpload + label img,
#imageInput + label img {
  height: 4rem;
}

#imageUpload + label:hover img,
#imageUpload + label:focus img,
#imageInput + label:hover img,
#imageInput + label:focus img {
  filter: invert(1);
}

.preview-container {
  width: 80vw;
  height: 70%;
  border: 1px solid var(--color-black);
  overflow-y: scroll;
  border-radius: 0.25rem;
}

.preview-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.75rem;
  gap: 0.5rem;
}

.preview-img {
  object-fit: cover;
  overflow: hidden;
  height: 30vw;
  width: 30vw;
  border-radius: 0.5rem;
}

.preview-progression-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 30vw;
}

.preview-progression {
  appearance: none;
  border-radius: 0.5rem;
  height: 0.5rem;
  width: 30vw;
}
.preview-progression::-webkit-progress-bar {
  background-color: var(--color-background-light);
  border-radius: 0.5rem;
}

.preview-progression::-webkit-progress-value {
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}
.preview-progression::-moz-progress-bar {
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

@media (orientation: landscape) {
  .background-img {
    height: 50%;
    width: auto;
  }
}
</style>
