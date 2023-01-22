<i18n>
{
  "fr": {
    "title": "On se marie !",
    "p1": "Après 5 ans d'amour et de bonheur, nous nous préparons à embarquer pour une nouvelle aventure à deux.",
    "p2": "Nous avons le plaisir de vous inviter à célébrer avec nous notre mariage qui aura lieu le 19 août 2023 au bord de la mer qui nous tient tant à coeur.",
    "p3": "⚓️&nbsp;Préparez-vous à larguer les amarres avec nous&nbsp;!&nbsp;⚓️"
  },
  "en": {
    "title": "On se marie !",
    "p1": "Après 5 ans d'amour et de bonheur, nous nous préparons à embarquer pour une nouvelle aventure à deux.",
    "p2": "Nous avons le plaisir de vous inviter à célébrer avec nous notre mariage qui aura lieu le 19 août 2023 au bord de la mer qui nous tient tant à coeur.",
    "p3": "⚓️&nbsp;Préparez-vous à larguer les amarres avec nous&nbsp;!&nbsp;⚓️"
  }
}
</i18n>

<template>
  <section class="invite">
    <h2 class="title">{{ $t('title') }}</h2>
    <div class="container">
      <p class="invite-paragraph">
        {{ $t('p1') }}
        <br /><br />
        {{ $t('p2') }}
        <br />
        <br />
        {{ $t('p3') }}
      </p>

      <img class="dans-la-vallee" src="./img/bague.jpeg" />
    </div>
  </section>
</template>

<style scoped>
.invite {
  display: flex;
  flex-direction: column;
  color: #2e3f4b;
  background-color: #faf8ff;
  padding: 3rem 0;
}

.title {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;

  text-align: center;
}

.container {
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
}

.invite-paragraph {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6rem;
  width: 30rem;
}
.dans-la-vallee {
  display: block;
  width: 40%;
  height: auto;
  border-radius: 0.5rem;
}

@media screen and (max-width: 900px) {
  .invite {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
    line-height: 2.75rem;
  }

  .container {
    display: flex;

    flex-direction: column;
    margin-top: 1rem;
  }

  .invite-paragraph {
    width: 100%;
  }

  .dans-la-vallee {
    width: 100%;
  }
}
</style>
