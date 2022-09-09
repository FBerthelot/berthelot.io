/* import Vue from 'vue'
import { MoreButton, GrenadeButton } from '.'
import { boolean } from '@storybook/addon-knobs'

export default {
  title: 'Button',
}

const colors = {
  white: 'white',
  light: 'light',
  bright: 'bright',
  medium: 'medium',
  dark: 'dark',
  black: 'black',
}

export const moreButton = () => ({
  components: { MoreButton },
  props: {
    disabled: {
      default: boolean('boolean', false),
    },
  },
  template: `
  <div style="margin: 5rem;">
    <MoreButton :disabled="disabled" />
  </div>
  `,
})

export const grenade = () => ({
  components: { GrenadeButton },
  props: {
    disabled: {
      default: boolean('boolean', false),
    },
  },
  template: `
  <div style="display: flex;flex-direction: column; height: 100vh; width: 50%;margin: 5rem 25%;justify-content: center;align-item: center;">
    <GrenadeButton :disabled="disabled">Twitter</GrenadeButton>
  </div>
  `,
}) */
