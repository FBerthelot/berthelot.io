<i18n lang="json">
{
  "fr": {
    "title": "On se marie !",
    "p1": "Tout a vraiment commencé pour nous le 12 juillet 2018, face à la mer devant un sublime coucher de soleil au Beg Léguer...",
    "p2": "3 ans plus tard jour pour jour, devant un coucher de soleil miraculeux à Saint-Cast Le Guildo, nous décidions d'embarquer pour une nouvelle aventure à deux.",
    "p3": "Après bientôt 5 ans d'amour et de bonheur, nous avons le plaisir de t'inviter à célébrer avec nous notre mariage qui aura lieu le 19 août 2023 sur la côte qui nous tient tant à coeur. | Après bientôt 5 ans d'amour et de bonheur, nous avons le plaisir de vous inviter à célébrer avec nous notre mariage qui aura lieu le 19 août 2023 sur la côte qui nous tient tant à coeur.",
    "p4": "⚓️&nbsp;Prépares toi à venir larguer les amarres avec nous&nbsp;!&nbsp;⚓️ | ⚓️&nbsp;Préparez vous à venir larguer les amarres avec nous&nbsp;!&nbsp;⚓️"
  },
  "en": {
    "title": "We're tying the knot!",
    "p1": "Everything really began for us on the 12th of July 2018, facing the gorgeous sunset on the sea in Beg Léguer...",
    "p2": "3 years later to the day, in front of a miraculous sunset in Saint-Cast Le Guildo, we decided to embark on a brand new adventure together.",
    "p3": "After nearly 5 years of love and happiness, we have the pleasure of inviting you to celebrate with us our wedding that will take place on the 19th of August 2023 by the shores we hold so close to our hearts.",
    "p4": "⚓️&nbsp;Get ready to cast off with us&nbsp;!&nbsp;⚓️"
  }
}
</i18n>

<template>
  <section class="invite">
    <h2 class="title">{{ t('title') }}</h2>
    <div class="container">
      <p class="invite-paragraph">
        <span>{{ t('p1', invitation.nbOfPeople) }}</span>
        <br /><br />
        <span>{{ t('p2', invitation.nbOfPeople) }}</span>
        <br />
        <br />
        <span>{{ t('p3', invitation.nbOfPeople) }}</span>
        <br />
        <br />
        <span>{{ t('p4', invitation.nbOfPeople) }}</span>
      </p>

      <img class="dans-la-vallee" src="./assets/bague.jpg" />
    </div>
  </section>
</template>

<script setup lang="js">
const { t } = useI18n({
  useScope: 'local',
})
const { invitation } = defineProps({
  invitation: {
    type: Object,
    required: true,
  },
})
</script>

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
