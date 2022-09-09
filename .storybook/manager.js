import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

import '../components/colors/colors.css'

addons.setConfig({
  theme: themes.dark,
})
