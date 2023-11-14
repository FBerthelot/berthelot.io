<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Partage de photos et vidéos - Mariage Agnès et Florent",
      "description": "Vous pouvez nous partager vos photos et vidéos ici."
    },
    "title": "Partage de photos et vidéos",
    "takePictureButton": "Prendre une photo",
    "shareAssetButton": "Partager photos & vidéos",
    "uploading": "En cours",
    "uploadingPaused": "En pause",
    "uploadingError": "Une erreur est survenu.",
    "uploadingSuccess": "Chargé ! 🎉"
  },
  "en": {
    "meta": {
      "title": "Sharing photos and videos - Agnès and Florent wedding",
      "description": "You can share your photos and videos here."
    },
    "title": "Sharing photos and videos",
    "takePictureButton": "Take a picture",
    "shareAssetButton": "Share photos & videos",
    "uploading": "Uploading",
    "uploadingPaused": "Paused",
    "uploadingError": "An error occurred.",
    "uploadingSuccess": "Uploaded! 🎉"
  }
}
</i18n>

<template>
  <main id="wedding-design-system">
    <h1 class="title typography-title-2">
      {{ t('title') }}
    </h1>

    <form @submit.prevent="handleUploadingPhoto">
      <img
        v-if="!assets.length"
        class="background-img"
        src="/assets/mariage/Agnes & Florent 19-08-2023-violet.svg"
        alt=""
      />
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
              asset.status === 'paused' ? t('uploadingPaused') : t('uploading')
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
            {{ t(`uploadingError`) }}{{ asset.error.message }}
          </div>
          <div
            v-if="asset.status === 'success'"
            class="preview-progression-container"
          >
            {{ t(`uploadingSuccess`) }}
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
          <img
            alt=""
            src="../../components/mariage/00_design-system/icons/telecharger.png"
          />{{ t(`shareAssetButton`) }}</label
        >

        <input
          v-if="isCaptureSupported"
          id="imageInput"
          type="file"
          accept="image/*"
          capture="user"
          @change="handleImageChange"
        />
        <label v-if="isCaptureSupported" for="imageInput" class="button">
          <img
            alt=""
            src="../../components/mariage/00_design-system/icons/photo.svg"
          />{{ t(`takePictureButton`) }}</label
        >
      </div>
    </form>
  </main>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import { initializeApp } from 'firebase/app'
import {
  getStorage,
  uploadBytesResumable,
  ref as firebaseRef,
} from 'firebase/storage'
const appConfig = useAppConfig()

const { t } = useI18n({
  useScope: 'local',
})

definePageMeta({
  layout: 'mariage',
})
useSeoMeta({
  ogType: 'website',
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  twitterTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  twitterDescription: t('meta.description'),
  twitterCard: 'summary',
  ogUrl: 'https://berthelot.io/mariage/photo',
})

const assets = ref([])
const firebaseApp = ref(null)
const firebaseStorage = ref(null)
const isCaptureSupported = ref(false)

const handleImageChange = (e) => {
  assets.value = [
    ...assets.value,
    ...Array.from(e.target.files)
      .map((file) => {
        const firestoreUrl = `/photos/${file.lastModified}-${file.name}`

        if (this.assets.find((asset) => asset.firestoreUrl === firestoreUrl)) {
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

  assets.value
    .filter((asset) => asset.status === 'starting')
    .forEach((asset) => {
      uploadOnePhoto(asset)
    })
}

const uploadOnePhoto = (asset) => {
  const storageRef = firebaseRef(firebaseStorage.value, asset.firestoreUrl)
  const uploadTask = uploadBytesResumable(storageRef, asset.rawFile, {
    customMetadata: {
      userAgent: window.navigator.userAgent,
      lastModified: asset.rawFile.lastModified,
      lastModifiedDate: asset.rawFile.lastModifiedDate?.toISOString(),
      originalName: asset.rawFile.name,
    },
  })

  assets.value = assets.value.map((a) => {
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
      assets.value = assets.value.map((a) => {
        if (asset.firestoreUrl === a.firestoreUrl) {
          return {
            ...a,
            status: snapshot.state, // "canceled" | "running" | "paused" | "success" | "error"
            uploadPct: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          }
        }
        return a
      })
    },
    (error) => {
      assets.value = assets.value.map((a) => {
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
      assets.value = assets.value.map((a) => {
        if (asset.firestoreUrl === a.firestoreUrl) {
          return {
            ...a,
            status: 'success',
          }
        }
        return a
      })
    },
  )
}

onMounted(() => {
  const firebaseConfig = {
    apiKey: appConfig.FIREBASE_API_KEY,
    authDomain: appConfig.FIREBASE_AUTH_DOMAIN,
    projectId: appConfig.FIREBASE_PROJECT_ID,
    storageBucket: appConfig.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: appConfig.FIREBASE_MESSAGING_SENDER_ID,
    appId: appConfig.FIREBASE_APP_ID,
  }
  firebaseApp.value = initializeApp(firebaseConfig)
  firebaseStorage.value = getStorage(firebaseApp.value)

  const el = document.createElement('input')
  isCaptureSupported.value = el.capture !== undefined
})
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
  height: 3rem;
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
