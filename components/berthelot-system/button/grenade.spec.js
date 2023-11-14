import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import GrenadeButton from './grenade.vue'

describe('GrenadeButton', () => {
  it('should use button tag by default', () => {
    const component = mount(GrenadeButton)
    expect(component.html()).toContain('button')
  })

  it('should use div when overidding component', () => {
    const component = mount(GrenadeButton, {
      propsData: {
        component: 'div',
      },
    })
    expect(component.html()).toContain('div')
  })

  it('should display slot', () => {
    const component = mount(GrenadeButton, {
      slots: {
        default: 'hello world',
      },
    })
    expect(component.html()).toContain('hello world')
  })

  it('should wait 2s before throwing the grenade when givin throwIn 2s', async () => {
    vi.useFakeTimers()
    const component = mount(GrenadeButton, {
      propsData: {
        throwIn: 2,
      },
    })

    expect(component.find('.grenade--throwed').exists()).toBe(false)
    vi.advanceTimersByTime(2000)
    await nextTick()
    expect(component.find('.grenade--throwed').exists()).toBe(true)
  })
})
