import { addParameters, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

import '../assets/reset.css'
import '../components/colors/colors.css'
import '../components/typography/typography.css'

addDecorator(withKnobs)
addDecorator(withA11y)

addParameters({
  backgrounds: [
    { name: 'default (black)', value: 'var(--color-black)', default: true },
    { name: 'dark', value: 'var(--color-dark)' },
    { name: 'medium', value: 'var(--color-medium)' },
    { name: 'bright', value: 'var(--color-bright)' },
    { name: 'light', value: 'var(--color-light)' },
    { name: 'white', value: 'var(--color-white)' },
  ],
})
