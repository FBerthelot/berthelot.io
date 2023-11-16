import { mount } from '@vue/test-utils'
import { beforeEach, describe, it, vi } from 'vitest'
import Avatar from './avatar.vue'

describe('Avatar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should display the front Avatar', () => {
    const component = mount(Avatar, {
      props: {
        frontSrc: 'moi.jpg',
        frontAlt: 'moi',
        backSrc: 'alive.gif',
        backAlt: 'alive',
      },
    })

    expect(component.html()).toContain('moi.jpg')
  })

  it('should display the back Avatar', async () => {
    const component = mount(Avatar, {
      props: {
        frontSrc: 'moi.jpg',
        frontAlt: 'moi',
        backSrc: 'alive.gif',
        backAlt: 'alive',
      },
    })

    expect(component.html()).toContain('alive.gif')
  })
})
