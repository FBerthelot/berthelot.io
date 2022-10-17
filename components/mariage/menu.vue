<template>
  <nav class="menu">
    <ul class="menu-list">
      <li>
        <nuxt-link
          :to="
            localePath(
              `/mariage/${$route.params.invite}/schedule?noAnimation=true`
            )
          "
          class="wedding-button"
        >
          <span class="wedding-button-content">Programme 📔</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="
            localePath(`/mariage/${$route.params.invite}/info?noAnimation=true`)
          "
          class="wedding-button"
        >
          <span class="wedding-button-content">Informations pratiques 🔎</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="
            localePath(
              `/mariage/${$route.params.invite}/photo?noAnimation=true`
            )
          "
          class="wedding-button"
        >
          <span class="wedding-button-content">Photos 📸</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* .menu {
  width: 15vw;
} */

.menu-list {
  margin: 2rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.wedding-button {
  transition: all 0.4s ease;
}

.wedding-button:hover {
  transform: scale(1.2);
}

@media (orientation: portrait) {
  .menu {
    display: none;
  }
}
</style>
