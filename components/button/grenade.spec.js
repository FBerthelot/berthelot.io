import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { GrenadeButton } from '.'

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
    component.destroy()
  })

  it('should display slot', () => {
    const component = mount(GrenadeButton, {
      slots: {
        default: 'hello world',
      },
    })
    expect(component.html()).toContain('hello world')
    component.destroy()
  })

  it('should wait 2s before throwing the grenade when givin throwIn 2s', async () => {
    jest.useFakeTimers()
    const component = mount(GrenadeButton, {
      propsData: {
        throwIn: 2,
      },
    })

    expect(component.find('.grenade--throwed').exists()).toBe(false)
    jest.advanceTimersByTime(2000)
    await nextTick()
    expect(component.find('.grenade--throwed').exists()).toBe(true)
  })
})
