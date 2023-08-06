<template>
  <div id="wedding">
    <nuxt />
  </div>
</template>

<script>
import '~/assets/reset.css'

export default {
  head: {
    link: [
      {
        href: 'https://fonts.googleapis.com',
        rel: 'preconnect',
      },
      {
        href: 'https://fonts.gstatic.com',
        rel: 'preconnect',
        crossorigin: true,
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:wght@400;500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  mounted() {
    document.querySelector('body').style.backgroundColor = 'initial'
  },
}
</script>

<style>
#wedding {
  --color-background-light: #faf8ff;
  --color-background-strong: #f1e8ff;
  --color-background-dark: #2e3f4b;
  --color-primary: #8d4b9a;
  --color-gray: #f7f7f7;
  --color-black: #000000;
  --color-black-shadow: #0000000d;
  --color-white: #ffffff;

  --typography-sans-serif-font: 'Open Sans', sans-serif;
  --typography-serif-font: 'DM Serif Display', serif;

  height: 100%;
  width: 100%;
}

/** Typography **/
#wedding .typography-title {
  font-family: var(--typography-serif-font);
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
  text-align: center;
}

#wedding .typography-title-2 {
  font-family: var(--typography-sans-serif-font);
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.4rem;
  text-align: center;
}

#wedding .typography-title-3 {
  font-family: var(--typography-sans-serif-font);
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.4rem;
  text-align: center;
}

#wedding .typography-title-4 {
  font-family: var(--typography-sans-serif-font);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
}

#wedding .typography-paragraph {
  font-family: var(--typography-sans-serif-font);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6rem;
}

#wedding .typography-link {
  color: var(--color-black);
  text-decoration: underline;

  font-family: var(--typography-sans-serif-font);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
}

#wedding .typography-link:hover,
#wedding .typography-link:focus {
  outline: none;
  color: var(--color-primary);
}

/** Button **/
#wedding .button {
  font-family: 'Open Sans ', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;

  padding: 0.75rem 1rem;

  border-radius: 0.5rem;
  border: none;

  text-decoration: none;
  display: block;

  color: #2e3f4b;
  background-color: #fffbf8;

  transition: all 0.5s ease;
}

#wedding .button:hover,
#wedding .button:focus {
  box-shadow: 0 0 0.5rem #fffbf8;
  transform: scale(1.1);
  outline: none;

  background-color: #f1e8ff;
  animation: blink 1s infinite alternate;
}

#wedding .button:active {
  box-shadow: 0 0 1rem #9b61a7;
}

@keyframes blink {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}

/** Tabs system **/

#wedding .tablist {
  display: flex;
}

#wedding .tab {
  flex: 1;

  background: var(--color-gray);
  color: var(--color-black);

  font-family: var(--typography-sans-serif-font);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6rem;

  padding: 1rem 0.5rem;

  border: none;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  cursor: pointer;
}
#wedding .tab[aria-selected='true'] {
  background-color: var(--color-white);
}

#wedding .tabpanel {
  background: var(--color-white);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  width: 100%;
  box-shadow: 0px 4px 1rem 0px var(--color-black-shadow);

  display: none;
}

#wedding .tabpanel__open {
  display: flex;
  flex-direction: column;
}

#wedding .tabpanel-card {
  background: var(--color-background-light);
  border-radius: 0.5rem;
  border: 1px solid var(--color-background-strong);
  display: flex;
  flex-direction: column;
  padding: 1rem;

  min-height: 6rem;

  text-align: center;
}

#wedding .todo {
  background-color: cyan;
}
</style>
