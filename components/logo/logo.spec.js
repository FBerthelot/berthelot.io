import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { Logo } from './'

describe('Logo', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should display image of me', () => {
    Math.random = jest.fn(() => 0)
    const component = mount(Logo)
    expect(component.html()).toContain('moi.jpg')
    expect(component.find('.logo__face-b').isVisible()).toBe(false)
    expect(component.find('.logo__face-a').isVisible()).toBe(true)
    component.destroy()
  })

  it('should toggle me and my avatar after a amount of time', async () => {
    jest.useFakeTimers()
    const component = mount(Logo)
    expect(component.find('.logo__face-b').isVisible()).toBe(false)
    jest.advanceTimersByTime(30001)
    await nextTick()
    expect(component.find('.logo__face-b').isVisible()).toBe(true)
    component.destroy()
  })

  it('should display image of the joker', () => {
    const component = mount(Logo)
    expect(component.html()).toContain('joker.jpg')
    component.destroy()
  })

  it('should clean component on destroy', () => {
    jest.useFakeTimers()
    const component = mount(Logo)
    component.destroy()
    // It will start infinite loop as we are using interval, unless interval is cleared
    jest.runAllTimers()
  })

  it('should display image of my avatar when i specify it as the only face to show', () => {
    const component = mount(Logo, {
      propsData: {
        face: 1,
      },
    })
    expect(component.html()).toContain('alive.gif')
    expect(component.find('.logo__face-a').isVisible()).toBe(false)
    expect(component.find('.logo__face-b').isVisible()).toBe(true)
    component.destroy()
  })

  it('should not display image of my avatar when i specify face as the only face to show', async () => {
    const component = mount(Logo, {
      propsData: {
        face: 0,
      },
    })
    jest.advanceTimersByTime(30001)
    await nextTick()
    expect(component.find('.logo__face-a').isVisible()).toBe(true)
    expect(component.find('.logo__face-b').isVisible()).toBe(false)
    component.destroy()
  })

  it('should not display image of my avatar when i specify face as the only face to show', async () => {
    const component = mount(Logo, {
      propsData: {
        face: 1,
      },
    })
    jest.advanceTimersByTime(30001)
    await nextTick()
    expect(component.find('.logo__face-a').isVisible()).toBe(false)
    expect(component.find('.logo__face-b').isVisible()).toBe(true)
    component.destroy()
  })
})
