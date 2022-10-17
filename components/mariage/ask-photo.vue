<template>
  <section class="ask-photo">
    <img class="illustration" src="./img/photos.jpg" alt="" />

    <div class="ask-photo-content">
      <h3 class="title">PARTAGE DE PHOTOS ET VIDEOS</h3>
      <p>Vous allez pouvoir nous partager les photos et vidéos du mariage !</p>
    </div>
  </section>
</template>

<style scoped>
.ask-photo {
  width: 100%;
  position: relative;
}

.ask-photo-content {
  position: absolute;
  top: 0;
  left: 25%;
  width: 50%;
  height: 100%;
  color: white;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  line-height: 2rem;
}

.title {
  font-size: 2rem;
  line-height: 5rem;
}

.ask-photo-content p {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  width: 100%;
  height: auto;
  display: block;
}
</style>
