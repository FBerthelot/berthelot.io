<script lang="js">
import { h } from 'vue'

export default {
  props: {
    component: {
      type: String,
      required: false,
      default: 'button',
    },
  },
  render() {
    return h(
      this.component || 'button',
      {
        class: `typo_default typo_white button`,
      },
      '▼',
    )
  },
}
</script>

<style scoped>
.button {
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  border: none;

  background-color: var(--color-medium);

  cursor: pointer;
  transition: all 1s;
}

.button:hover,
.button:focus {
  transform: translateY(0.2rem) scale(1.2);
  outline: none;
  box-shadow: 0 0 2rem var(--color-light);
}

.button:active {
  box-shadow: 0 0 2rem var(--color-dark);
}
</style>
