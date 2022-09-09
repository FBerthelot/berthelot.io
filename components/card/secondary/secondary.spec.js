import { shallowMount } from '@vue/test-utils'
import { nextTick } from 'vue'
import CardSecondary from './secondary.vue'

describe('Card Secondary', () => {
  it('should hide alternatives by default', () => {
    const component = shallowMount(CardSecondary)

    expect(component.find('.alternatives').classes()).not.toContain(
      'alternatives--displayed'
    )
  })

  it('should show alternatives when clicking on the button', async () => {
    const component = shallowMount(CardSecondary, {
      stubs: {
        MoreButton: true,
      },
    })
    component.find('morebutton-stub').trigger('click')
    await nextTick()
    expect(component.find('.alternatives').classes()).toContain(
      'alternatives--displayed'
    )
  })

  it('should display slot', () => {
    const component = shallowMount(CardSecondary, {
      slots: {
        default: 'april 2020',
      },
    })

    expect(component.html()).toContain('april 2020')
  })
})
