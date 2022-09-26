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
          :to="localePath(`/mariage/${$route.params.invite}?noAnimation=true`)"
          class="wedding-button"
        >
          <span class="wedding-button-content">Accueil</span>
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
.menu {
  width: 100%;
}

.menu-list {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
