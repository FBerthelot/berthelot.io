<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <section class="invitations">
    <h2 class="typography-title-2">Liste des invités</h2>
    <span v-if="loading" class="typography-paragraph">Chargement...</span>
    <span v-if="error" class="typography-paragraph">Erreur : {{ error }}</span>
    <div v-if="!loading" class="invites">
      <input
        v-model="invitationsSearch"
        type="search"
        placeholder="Recherche"
      />
      <span v-if="!invitationsFiltered.length" class="typography-paragraph">
        Aucun invité ne correspond à la recherche.
      </span>
      <ul class="invites-list">
        <li v-for="invitation in invitationsFiltered" :key="invitation.id">
          <span class="typography-paragraph">
            {{ invitation.name }}
          </span>

          <nuxt-link
            title="Accéder à l'espace invité"
            class="icon"
            :to="`/mariage/${invitation.id}`"
          >
            🌎
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { invitations } from '~/components/mariage/00_shared/finalInvitations.data'

export default {
  data() {
    return {
      invitations,
      invitationsSearch: '',
      loading: false,
      error: null,
    }
  },
  computed: {
    invitationsFiltered() {
      return this.invitations.filter((invitation) =>
        invitation.name
          .toLowerCase()
          .includes(this.invitationsSearch.toLowerCase()),
      )
    },
  },
}
</script>

<style scoped>
.invitations {
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
}

.invites {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.invites input {
  height: 2rem;
  border-radius: 1rem;
  width: 15rem;
  padding: 0 1rem;
}

.invites-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem;
}

.invites-list li {
  padding: 1rem;
  width: 15rem;
  border: 1px solid grey;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--color-white);
}

.invites-list li span {
  color: black;
  text-decoration: none;
  flex-grow: 1;
}

.invites-list li .icon {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  text-decoration: none;
  color: black;
}

.invites-list a:hover,
.invites-list a:focus {
  text-decoration: underline;
}

@media (max-width: 500px) {
  .invitations {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .invites-list li {
    width: 18rem;
  }
}
</style>
