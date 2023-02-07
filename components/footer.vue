<i18n>
{
  "fr": {
    "linkedin": "Linkedin",
    "github": "Github",
    "Twitter": "Twitter",
    "Mail": "Mail"
  },
  "en": {
    "linkedin": "Linkedin",
    "github": "Github",
    "Twitter": "Twitter",
    "Mail": "Mail"
  }
}
</i18n>

<template>
  <footer class="footer">
    <ul class="social-network">
      <li>
        <Typography
          component="a"
          rel="noopener"
          target="_blank"
          href="https://twitter.com/berthel350"
        >
          <img src="/assets/twitter.svg" alt="" />
          {{ $t(`Twitter`) }}
        </Typography>
      </li>
      <li>
        <Typography
          component="a"
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/florent-berthelot-a2678861/"
        >
          <img src="/assets/linkedin.svg" alt="" />
          {{ $t(`linkedin`) }}
        </Typography>
      </li>
      <li>
        <Typography
          component="a"
          rel="noopener"
          target="_blank"
          href="https://github.com/FBerthelot"
        >
          <img src="/assets/github.svg" alt="" />{{ $t(`github`) }}</Typography
        >
      </li>

      <li>
        <Typography component="a" href="mailto:florent@berthelot.io">
          <img src="/assets/email.svg" alt="" />
          {{ $t(`Mail`) }}
        </Typography>
      </li>
    </ul>
  </footer>
</template>

<script>
import { Typography } from '~/components/typography'

export default {
  components: {
    Typography,
  },
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid var(--color-dark);
  height: 5rem;
  box-sizing: border-box;
}

.social-network {
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
}
.social-network a {
  position: relative;
  display: inline-block;
  margin: 0 0 -1px 0;
  border: 1px solid var(--color-dark);
  border-bottom: 1px solid var(--color-black);
  background: var(--color-dark);
  cursor: pointer;
  padding: 1rem;
  width: 6rem;
  height: 5rem;
  transition: all 0.5s ease;
  box-shadow: 0 -0.25rem 0.25rem var(--color-black);
  transform-origin: bottom center;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  font-size: 0.8rem;
}

.social-network a img {
  height: 2rem;
  padding: 0 1rem;
}

.social-network a:hover,
.social-network a:focus {
  border: 1px solid var(--color-light);
  border-bottom: 1px solid var(--color-black);
  transform: scale(1.3);
  box-shadow: 0 0rem 2rem var(--color-light);
  outline: none;
  z-index: 10;
}

@media screen and (max-width: 850px) {
  .social-network {
    justify-content: center;
    padding: 0;
  }
  .social-network a {
    font-size: 0.7rem;
    width: 4.5rem;
  }
  .social-network a {
    padding: 0.5rem 0;
  }
}
</style>
