import { mount } from '@vue/test-utils'
import { MoreButton } from '.'

describe('MoreButton', () => {
  it('should use button tag by default', () => {
    const component = mount(MoreButton)
    expect(component.html()).toContain('button')
  })

  it('should use div when overidding component', () => {
    const component = mount(MoreButton, {
      propsData: {
        component: 'div',
      },
    })
    expect(component.html()).toContain('div')
  })
})
