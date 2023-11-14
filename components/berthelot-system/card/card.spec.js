import { mount } from '@vue/test-utils'
import Card from './card.vue'

describe('Card', () => {
  it('should display slots for links', () => {
    const component = mount(Card, {
      props: {
        link: 'toto',
      },
      slots: { default: 'hello world' },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    })
    expect(component.html()).toContain('hello world')
  })

  it('should display slots for non-link', () => {
    const component = mount(Card, {
      slots: { default: 'hello world' },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    })
    expect(component.html()).toContain('hello world')
  })

  it('should not have a tag for non-link', () => {
    const component = mount(Card, {
      slots: { default: 'hello world' },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    })
    expect(component.find('a').exists()).toBe(false)
  })

  it('should have a tag for link', () => {
    const component = mount(Card, {
      props: {
        link: 'toto',
      },
      slots: { default: 'hello world' },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    })
    expect(component.find('a').exists()).toBe(true)
  })
})
