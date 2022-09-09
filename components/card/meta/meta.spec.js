import { mount } from '@vue/test-utils'
import CardMeta from './meta.vue'

describe('Card meta', () => {
  it('should display slot', () => {
    const component = mount(CardMeta, {
      slots: {
        default: 'april 2020',
      },
    })

    expect(component.html()).toContain('april 2020')
  })

  it('should be p by default', () => {
    const component = mount(CardMeta)
    expect(component.html()).toContain('p')
  })

  it('should use div when overidding component', () => {
    const component = mount(CardMeta, {
      propsData: {
        component: 'div',
      },
    })
    expect(component.html()).toContain('div')
  })
})
