<script>
export default {
  name: 'Typography',
  props: {
    component: {
      type: String,
      required: false,
      default: 'p',
    },
    variant: {
      type: String,
      required: false,
      default: 'default',
    },
    color: {
      type: String,
      required: false,
      default: 'white',
    },
  },
  render(createElement) {
    return createElement(
      this.component,
      {
        class: `typographyBase ${this.variant} ${this.color}`,
      },
      this.$slots.default,
    )
  },
}
</script>

<style scoped>
.typographyBase {
  font-family: Verdana, Geneva, sans-serif;
}

.default {
  font-size: 1rem;
  line-height: 1.3rem;
}

.meta-info {
  font-size: 0.7rem;
  line-height: 1rem;
  font-style: italic;
}

.title {
  font-family: suicide-squad, 'Comic Sans MS', 'Comic Sans', cursive;
  font-size: 3rem;
  line-height: 3rem;
}

.title--small {
  font-family: suicide-squad, 'Comic Sans MS', 'Comic Sans', cursive;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.title--extra-small {
  font-family: suicide-squad, 'Comic Sans MS', 'Comic Sans', cursive;
  font-size: 1.1rem;
  line-height: 1.5rem;
}

.white {
  color: var(--color-white);
}
.light {
  color: var(--color-light);
}
.bright {
  color: var(--color-bright);
}
.medium {
  color: var(--color-medium);
}
.dark {
  color: var(--color-dark);
}
.black {
  color: var(--color-black);
}
</style>
