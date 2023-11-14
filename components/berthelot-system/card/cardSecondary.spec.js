import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import CardSecondary from './cardSecondary.vue'

describe('Card Secondary', () => {
  it('should hide alternatives by default', () => {
    const component = mount(CardSecondary, {
      global: {
        stubs: {
          BerthelotSystemButtonMore: true,
        },
      },
    })

    expect(component.find('.alternatives').classes()).not.toContain(
      'alternatives--displayed',
    )
  })

  it('should show alternatives when clicking on the button', async () => {
    const component = mount(CardSecondary, {
      global: {},
    })
    component.find('button').trigger('click')
    await nextTick()
    expect(component.find('.alternatives').classes()).toContain(
      'alternatives--displayed',
    )
  })

  it('should display slot', () => {
    const component = mount(CardSecondary, {
      slots: {
        default: 'april 2020',
      },
      global: {
        stubs: {
          BerthelotSystemButtonMore: true,
        },
      },
    })

    expect(component.html()).toContain('april 2020')
  })
})
