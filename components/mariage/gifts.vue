<template>
  <section class="gifts">
    <img class="illustration" src="./img/tortue.png" alt="" />
    <div class="gifts-content">
      <h3 class="title">Voyage de noces</h3>
      <p>
        Nous ne souhaitons pas établir une liste de mariage. Si vous le
        souhaitez vous pouvez participer à notre voyage de noces le jour du
        mariage.
      </p>
    </div>
  </section>
</template>

<style scoped>
.gifts {
  width: 100%;
  position: relative;
}

.gifts-content {
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

.gifts-content p {
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
