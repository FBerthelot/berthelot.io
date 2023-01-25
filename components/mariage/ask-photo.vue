<i18n>
{
  "fr": {
    "title": "Partage de photos et vidéos",
    "paragraph": " Vous allez pouvoir nous partager vos photos et vidéos du mariage via ce site !"
  },
  "en": {
    "title": "Photos and videos sharing",
    "paragraph": " You will be able to share with us your photos and videos of the wedding via this website !"
  }
}
</i18n>

<template>
  <section class="ask-photo">
    <h3 class="title">{{ $t('title') }}</h3>

    <div class="ask-photo-content">
      <img class="illustration" src="./img/patchwork.png" alt="" />
      <p>
        {{ $t('paragraph') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.ask-photo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  gap: 2rem;

  background: #2e3f4b;
  color: #fffbf8;
  box-sizing: border-box;
}

.title {
  font-family: 'DM Serif Display', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
}

.ask-photo-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.ask-photo-content p {
  width: 40%;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.6rem;
}

.illustration {
  width: 50%;
  border-radius: 0.5rem;
  height: auto;
  display: block;
}

@media screen and (max-width: 900px) {
  .ask-photo {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
    line-height: 2.75rem;
    text-align: center;
  }

  .ask-photo-content {
    display: flex;

    flex-direction: column;
    margin-top: 1rem;
  }

  .ask-photo-content p {
    width: 100%;
  }

  .illustration {
    width: 100%;
  }
}
</style>
