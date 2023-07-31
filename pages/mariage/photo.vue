<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <main id="wedding-design-system">
    <h1 class="title typography-title-2">Partage de photos et vidéos</h1>

    <form @submit.prevent="handleUploadingPhoto">
      <img v-if="!assets.length" class="background-img" :src="Logo" alt="" />
      <section v-if="!!assets.length" class="preview-container">
        <article v-for="asset in assets" :key="asset.id" class="preview-item">
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
            ✅ Cela s'affichera bientôt sur le projecteur ✅
          </div>
        </article>
      </section>

      <input
        id="imageInput"
        type="file"
        accept="image/*"
        capture="user"
        multiple
        @change="handleImageChange"
      />
      <label for="imageInput" class="button">Prendre une photo</label>
    </form>
  </main>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getStorage, uploadBytesResumable, ref } from 'firebase/storage'
import Logo from '~/components/mariage/00_shared/logo/logo-06.svg'

export default {
  layout: 'mariage',
  data: () => {
    return {
      assets: [],
      Logo,
      firebaseApp: null,
      firebaseStorage: null,
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
  },
  methods: {
    handleImageChange(e) {
      this.assets = [
        ...Array.from(e.target.files)
          .map((file, _i, currentArray) => {
            const firestoreUrl = `/photos/${file.lastModified}-${file.name}`

            if (
              currentArray.find((asset) => asset.firestoreUrl === firestoreUrl)
            ) {
              return null
            }

            return {
              firestoreUrl,
              objectUrl: URL.createObjectURL(e.target.files[0]),
              rawFile: file,
              status: 'starting',
              uploadPct: 0,
            }
          })
          .filter(Boolean),
        ...this.assets,
      ]

      this.assets
        .filter((asset) => asset.status === 'starting')
        .forEach((asset) => {
          this.uploadOnePhoto(asset)
        })
    },
    uploadOnePhoto(asset) {
      const storageRef = ref(this.firebaseStorage, asset.firestoreUrl)
      const uploadTask = uploadBytesResumable(storageRef, asset.rawFile)

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
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.background-img {
  width: 75%;
}

#imageInput {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

#imageInput + label {
  cursor: pointer;
  animation: blink 1s infinite alternate;
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
</style>
