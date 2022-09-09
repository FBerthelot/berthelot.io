import { Logo } from './'

export default {
  title: 'Logo',
}

export const standard = () => ({
  components: { Logo },
  template: `
  <div style="margin: 5rem;">
    <Logo />
  </div>
  `,
})
