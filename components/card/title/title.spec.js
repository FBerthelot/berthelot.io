import { mount } from '@vue/test-utils'
import CardTitle from './title.vue'

describe('Card title', () => {
  it('should display slot', () => {
    const component = mount(CardTitle, {
      slots: {
        default: 'april 2020',
      },
    })

    expect(component.html()).toContain('april 2020')
  })

  it('should use h4 when overidding component', () => {
    const component = mount(CardTitle, {
      propsData: {
        component: 'h4',
      },
    })
    expect(component.html()).toContain('h4')
  })

  it('should use h2 by default', () => {
    const component = mount(CardTitle)
    expect(component.html()).toContain('h2')
  })
})
