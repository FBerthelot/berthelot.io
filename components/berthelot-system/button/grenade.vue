<script lang="js">
import { h } from 'vue'

export default {
  props: {
    component: {
      type: String,
      required: false,
      default: 'button',
    },
    throwIn: {
      type: Number,
      required: false,
      default: 0,
    },
    throwAgain: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      throwed: false,
    }
  },
  watch: {
    throwAgain() {
      this.throwed = false
      this.timeout = setTimeout(() => {
        this.throwed = true
      }, this.throwIn)
    },
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.throwed = true
    }, this.throwIn)
  },
  unmounted() {
    clearTimeout(this.timeout)
  },
  render() {
    return h(
      this.component || 'button',
      {
        class: `typo_default grenade ${this.throwed ? 'grenade--throwed' : ''}`,
      },
      this.$slots,
    )
  },
}
</script>

<style scoped>
.grenade {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease;
  opacity: 0;

  position: relative;
  border-radius: 50%;
  width: 0.75rem;
  height: 1rem;
  background-color: var(--color-medium);
  color: transparent;

  border: 1px solid var(--color-medium);
  padding: 1rem;
  cursor: pointer;
}

.grenade {
  text-decoration: none;
}

.grenade.grenade--throwed:hover,
.grenade.grenade--throwed:focus,
:focus > .grenade.grenade--throwed {
  border: 1px solid var(--color-light);
  box-shadow: 0 0 1rem var(--color-light);
}

.grenade.grenade--throwed:active {
  border: 1px solid var(--color-dark);
  box-shadow: 0 0 1rem var(--color-dark);
}

.grenade::before {
  display: block;
  content: '';
  position: absolute;
  top: -0.3rem;
  left: -0.5rem;
  width: 0.4rem;
  height: 1.5rem;
  transform: rotateZ(20deg);
  background-image: linear-gradient(to bottom, #444444 30%, #cccccc 30%);
  transition: all 1s ease;
}
.grenade::after {
  display: block;
  content: '';
  position: absolute;
  left: -0.4rem;
  top: -0.3rem;
  width: 1.6rem;
  height: 0.5rem;
  background-image: linear-gradient(to left, #444444 50%, #444444 50%);
}

.grenade--throwed {
  animation:
    bounceInDown 1.4s ease 0s 1 forwards,
    deployButton 0.6s ease 2s 1 forwards;
}

.grenade--throwed::after {
  animation: explodeY 1s ease 2s 1 forwards;
}
.grenade--throwed::before {
  animation: explodeX 1s ease 2s 1 forwards;
}

@keyframes explodeY {
  to {
    transform: translate3d(0, -300vh, 0);
  }
}
@keyframes explodeX {
  to {
    transform: translate3d(-300vw, -25vh, 0);
  }
}
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -0.5rem, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes deployButton {
  to {
    background-color: var(--color-medium);
    border-radius: 0;
    color: var(--color-white);
    width: 8rem;
    height: 3.5rem;
  }
  75% {
    color: transparent;
  }
}
</style>
