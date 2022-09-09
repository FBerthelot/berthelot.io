<template>
  <main class="container">
    <header>
      <h1 class="title">Agnès et Florent</h1>
    </header>

    <section id="schedule" class="section">
      <h2>Programme</h2>

      <article>
        <h3>Jour 1 - 19 Août 2023</h3>
        <details>
          <summary>En cours de planification ...</summary>
        </details>
        <details>
          <summary>16h - Église Notre Dame du Cap Lihou</summary>
          TODO - Carte, info pratique, Parking privilégié
        </details>
        <details>
          <summary>En cours de planification ...</summary>
        </details>
      </article>

      <article>
        <h3>Jour 2 - 20 Août 2023</h3>
        <details>
          <summary>En cours de planification ...</summary>
        </details>
      </article>
    </section>

    <section class="section">
      <h2>Photos</h2>
      TODO mur photo de nous. Invitation a partager les photos.
    </section>

    <section class="section">
      Pour nous le mariage, c'est surtout la nuit de noce !
    </section>
  </main>
</template>

<style scoped>
.container {
  width: 70%;
  margin-left: 15%;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.section {
  width: 100%;
  margin: 3rem 0;

  line-height: 1.5rem;
}

.section h2 {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 2rem;
}
</style>
