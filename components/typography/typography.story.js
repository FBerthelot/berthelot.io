/* import Vue from 'vue'
import Typography from './typography.vue'
import { select, text } from '@storybook/addon-knobs'

export default {
  title: 'Typography',
}

const colors = {
  white: 'white',
  light: 'light',
  bright: 'bright',
  medium: 'medium',
  dark: 'dark',
  black: 'black',
}

export const allVariants = () => ({
  components: { Typography },
  props: {
    color: {
      default: select('color', colors),
    },
    text: {
      default: text('text', 'This is a text, I probably can write'),
    },
  },
  template: `
    <div style="display: flex;flex-direction: column; height: 50vh;justify-content: space-around;">
      <Typography :color="color" variant="title">{{text}}</Typography>
      <Typography :color="color" variant="title--small">{{text}}</Typography>
      <Typography :color="color" variant="title--extra-small">{{text}}</Typography>
      <Typography :color="color" variant="meta-info">{{text}}</Typography>
      <Typography :color="color">{{text}}</Typography>
    </div>
  `,
})
*/
