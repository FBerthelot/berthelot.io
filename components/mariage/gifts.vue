<template>
  <section class="gifts">
    <h3 class="title">Voyage de noces</h3>

    <div class="gifts-content">
      <p>
        Votre présence est notre cadeau de mariage le plus précieux. <br />
        <br />

        Nous ne souhaitons pas établir de liste de mariage, ceux qui le voudront
        pourront participer à notre voyage de noces. Une urne sera à votre
        disposition pendant la soirée.
      </p>
      <img
        class="illustration"
        src="./img/maldives.png"
        alt="Plage paradisiaque"
      />
    </div>
  </section>
</template>

<style scoped>
.gifts {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  gap: 2rem;

  background: #faf8ff;
  color: #2e3f4b;
}

.title {
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
}

.gifts-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.gifts-content p {
  width: 40%;

  font-family: 'Open Sans';
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

@media screen and (max-width: 850px) {
  .gifts {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
    line-height: 2.75rem;
  }

  .gifts-content {
    display: flex;

    flex-direction: column;
    margin-top: 1rem;
  }

  .gifts-content p {
    width: 100%;
  }

  .illustration {
    width: 100%;
  }
}
</style>
