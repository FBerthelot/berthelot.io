import { shallowMount } from '@vue/test-utils'
import Typography from './typography.vue'

describe('Typography', () => {
  it('should be p by default', () => {
    const component = shallowMount(Typography)
    expect(component.html()).toContain('p')
  })

  it('should use div when overidding component', () => {
    const component = shallowMount(Typography, {
      propsData: {
        component: 'div',
      },
    })
    expect(component.html()).toContain('div')
  })

  it('should display slots', () => {
    const component = shallowMount(Typography, {
      slots: { default: 'hello world' },
    })
    expect(component.html()).toContain('hello world')
  })

  it('should use the white color by default', () => {
    const component = shallowMount(Typography)
    expect(component.html()).toContain('white')
  })

  it('should use the light color when passing the color props', () => {
    const component = shallowMount(Typography, {
      propsData: {
        color: 'light',
      },
    })
    expect(component.html()).toContain('light')
  })
})
