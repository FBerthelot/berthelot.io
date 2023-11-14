import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import * as data from '../../01_shared/finalInvitations.data'
import Page from '~/pages/mariage/[invite]/answer.vue'

vi.mock('../../01_shared/finalInvitations.data', () => {
  return {
    invitations: [],
  }
})

describe('MainPage', () => {
  let config
  let invitation

  beforeEach(() => {
    config = {
      stubs: ['nuxt-link'],
      mocks: {},
    }

    invitation = {
      id: 'idOfTheInvitation',
      name: 'La famille Nigzy',
      people: ['Gens 1', 'Gens 2', 'Gens 3', 'Gens 4', 'Gens 5'],
      ages: {
        'Gens 1': '18 - 75 ans',
        'Gens 2': '18 - 75 ans',
        'Gens 3': '0 - 3 ans',
        'Gens 4': '4 - 12 ans',
        'Gens 5': '13 - 17 ans',
      },
      plus1Invited: true,
      plus1Name: '',
      questionOnChildren: true,
      children: ['Gens 3', 'Gens 4', 'Gens 5'],
      placeholderComment: '',
      placeholderAllergies: '',
      isAnswered: true,
      invitedTo: {
        cityHall: true,
        church: true,
        wineReception: true,
        party: true,
        after: true,
      },
    }
    data.invitations[0] = invitation

    globalThis.useI18n = () => {
      return {
        t: (key, count) => {
          return `${key}${Number(count) ? count : ''}`
        },
      }
    }
    globalThis.useLocalePath = () => (path) => path
    globalThis.definePageMeta = vi.fn()
    globalThis.useSeoMeta = vi.fn()
    globalThis.useRoute = vi.fn(() => ({
      params: { invite: 'idOfTheInvitation' },
      query: {},
    }))
    globalThis.useRuntimeConfig = vi.fn(() => ({
      public: {},
    }))
    globalThis.navigateTo = vi.fn()

    vi.spyOn(window, 'alert').mockImplementation(() => {})
    vi.spyOn(console, 'info').mockImplementation(() => {})
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.spyOn(window, 'alert').mockClear()
    vi.spyOn(console, 'info').mockClear()
  })

  it('should display cannot found message when invitation not exist', async () => {
    globalThis.useRoute.mockImplementation(() => ({
      params: {
        invite: 'notInvited',
      },
      query: {},
    }))
    const component = mount(Page, config)

    await nextTick()

    expect(component.html()).toContain('fatal_error.p1')
  })

  it('should not display cannot found message when invitation exist', async () => {
    const component = mount(Page, config)

    await nextTick()

    expect(component.html()).not.toContain('fatal_error.p1')
  })

  describe('when invitation exist', () => {
    it('should display the council when invited', async () => {
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).toContain('attending.cityHall')
    })

    it('should not display the council when not invited', async () => {
      invitation.invitedTo.cityHall = false
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).not.toContain('attending.cityHall')
    })

    it('should display the church when invited', async () => {
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).toContain('attending.church')
    })

    it('should not display the church when not invited', async () => {
      invitation.invitedTo.church = false
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).not.toContain('attending.church')
    })

    it('should display the wineReception when invited for that', async () => {
      invitation.invitedTo.wineReception = true
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).toContain('attending.wineReception')
    })

    it('should not display the wineReception when not invited', async () => {
      invitation.invitedTo.wineReception = false
      invitation.invitedTo.party = false
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).not.toContain('attending.wineReception')
    })

    it('should display the party when invited', async () => {
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).toContain('attending.party')
    })

    it('should not display the party when not invited', async () => {
      invitation.invitedTo.party = false
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).not.toContain('attending.party')
    })

    it('should display the after when invited', async () => {
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).toContain('attending.after')
    })

    it('should not display the after when not invited', async () => {
      invitation.invitedTo.after = false
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).not.toContain('attending.after')
    })

    it('should deselect every other things when click on cant come', async () => {
      const component = mount(Page, config)

      await nextTick()
      component.find('[value="cityHall"]').trigger('change')
      await nextTick()
      expect(component.find('[value="cityHall"]').element.checked).toBe(true)

      component.find('[value="cant"]').trigger('change')

      await nextTick()
      expect(component.find('[value="cant"]').element.checked).toBe(true)
      expect(component.find('[value="cityHall"]').element.checked).toBe(false)
    })

    it('should deselect cant come when click on other things', async () => {
      const component = mount(Page, config)

      await nextTick()

      component.find('[value="cant"]').trigger('change')
      await nextTick()

      expect(component.find('[value="cant"]').element.checked).toBe(true)

      component.find('[value="cityHall"]').trigger('change')
      await nextTick()

      expect(component.find('[value="cityHall"]').element.checked).toBe(true)
      expect(component.find('[value="cant"]').element.checked).toBe(false)
    })

    it('should display each adults when click on nothings', async () => {
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).toContain('Gens 1')
      expect(component.html()).toContain('Gens 2')
    })

    it('should not display children when click on nothings', async () => {
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).not.toContain('Gens 3')
      expect(component.html()).not.toContain('Gens 4')
      expect(component.html()).not.toContain('Gens 5')
    })

    it('should display adults and children when click on yes on question children come', async () => {
      const component = mount(Page, config)

      await nextTick()

      component.find('input[name="children"][value="true"]').trigger('change')
      await nextTick()

      expect(component.html()).toContain('Gens 1')
      expect(component.html()).toContain('Gens 2')
      expect(component.html()).toContain('Gens 3')
      expect(component.html()).toContain('Gens 4')
      expect(component.html()).toContain('Gens 5')
    })

    it('should not display children question when there is no question on children', async () => {
      invitation.questionOnChildren = false
      const component = mount(Page, config)

      await nextTick()

      expect(
        component.find('input[name="children"][value="true"]').exists(),
      ).toBe(false)
    })

    it('should display adults and children when there is no question on children', async () => {
      invitation.questionOnChildren = false
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).toContain('Gens 1')
      expect(component.html()).toContain('Gens 2')
      expect(component.html()).toContain('Gens 3')
      expect(component.html()).toContain('Gens 4')
      expect(component.html()).toContain('Gens 5')
    })

    it('should display the plus1 question when invitation say so', async () => {
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).toContain('plus1.question')
    })

    it('should not display the plus1 question when invitation say no', async () => {
      invitation.plus1Invited = false
      const component = mount(Page, config)

      await nextTick()

      expect(component.html()).not.toContain('plus1.question')
    })

    it('should ask for plus1 meal when plus1name is filled', async () => {
      const component = mount(Page, config)

      await nextTick()

      component.find('input[name="plus1"][value="yes"]').trigger('change')
      await nextTick()

      component.find('input[name="plus1Name"]').setValue('ThePlus1Name')
      await nextTick()

      expect(component.find('.meal-people').html()).toContain('ThePlus1Name')
    })

    it('should not ask for plus1 meal when plus1 question is no', async () => {
      const component = mount(Page, config)

      await nextTick()

      component.find('input[name="plus1"][value="yes"]').trigger('change')
      await nextTick()

      component.find('input[name="plus1Name"]').setValue('ThePlus1Name')
      await nextTick()

      component.find('input[name="plus1"][value="no"]').trigger('change')
      await nextTick()

      expect(component.find('.meal-people').html()).not.toContain(
        'ThePlus1Name',
      )
    })

    describe('when validate the form', () => {
      it('should display errors on almost each fields when submiting form without enter values', async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('form').trigger('submit')
        await nextTick()

        const errors = component.findAll('.error')

        expect(errors.length).toBe(8)

        expect(errors.at(0).text()).toBe('attending.error.required5')
        expect(errors.at(1).text()).toBe('plus1.error.required')
        expect(errors.at(2).text()).toBe('children.error.required3')
        expect(errors.at(3).text()).toBe('meal.error.required')
        expect(errors.at(4).text()).toBe('meal.error.required')
        expect(errors.at(5).text()).toBe('comment.error.required5')
        expect(errors.at(6).text()).toBe('cgu.error.required')
        expect(errors.at(7).text()).toBe('')
      })

      it('should display errors on plus1Name when plus1 question is yes', async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('form').trigger('submit')
        await nextTick()

        component.find('input[name="plus1"][value="yes"]').trigger('change')
        await nextTick()

        const errors = component.findAll('.error')

        expect(errors.length).toBe(9)

        expect(errors.at(0).text()).toBe('attending.error.required5')
        expect(errors.at(1).text()).toBe('')
        expect(errors.at(2).text()).toBe('plus1.errorName.required')
      })

      it('should not call anything when only not answer meal questions and plus1Name', async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('[value="cityHall"]').trigger('change')
        component.find('[value="church"]').trigger('change')
        component.find('[value="wineReception"]').trigger('change')
        component.find('[value="party"]').trigger('change')
        component.find('[value="after"]').trigger('change')
        component.find('input[name="cgu"]').setChecked()
        component.find('textarea[name="comment"]').setValue('This is a comment')

        await nextTick()

        component.find('form').trigger('submit')
        await nextTick()

        expect(window.alert).toHaveBeenCalledTimes(0)
      })

      it('should not send anything the form when submiting invalid form', async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('form').trigger('submit')
        await nextTick()

        expect(window.alert).toHaveBeenCalledTimes(0)
      })

      it('should send a request to slack when the form is valid', async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('[value="cityHall"]').trigger('change')
        component.find('input[name="plus1"][value="no"]').trigger('change')
        component
          .find('input[name="children"][value="false"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 1"][value="fish"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 2"][value="fish"]')
          .trigger('change')
        component.find('textarea[name="comment"]').setValue('This is a comment')
        component.find('input[name="cgu"]').setChecked()

        await nextTick()
        component.find('form').trigger('submit')
        await nextTick()

        expect(window.alert).toHaveBeenCalledTimes(1)
        expect(window.alert).toHaveBeenCalledWith('Trop tard pour répondre !')
      })

      it('should redirect to home page when the form is valid', async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('[value="cityHall"]').trigger('change')
        component.find('input[name="plus1"][value="no"]').trigger('change')
        component
          .find('input[name="children"][value="false"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 1"][value="fish"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 2"][value="fish"]')
          .trigger('change')
        component.find('textarea[name="comment"]').setValue('This is a comment')
        component.find('input[name="cgu"]').setChecked()

        await nextTick()
        component.find('form').trigger('submit')
        await nextTick()

        await nextTick()

        expect(globalThis.navigateTo).toHaveBeenCalledTimes(1)
        expect(globalThis.navigateTo).toHaveBeenCalledWith(
          '/mariage/idOfTheInvitation?noAnimation=true',
        )
      })

      it('Should respond a understandable message when people cant come', async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('[value="cant"]').trigger('change')
        component.find('input[name="cgu"]').setChecked()
        component.find('textarea[name="comment"]').setValue('This is a comment')

        await nextTick()
        component.find('form').trigger('submit')
        await nextTick()

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('Ils ne peuvent pas venir.'),
        )
        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('"This is a comment"'),
        )
      })

      it('should send a loong message when all field is filled', async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('[value="cityHall"]').trigger('change')
        component.find('[value="church"]').trigger('change')
        component.find('[value="wineReception"]').trigger('change')
        component.find('[value="party"]').trigger('change')
        component.find('[value="after"]').trigger('change')

        component.find('input[name="plus1"][value="yes"]').trigger('change')
        await nextTick()
        component.find('input[name="plus1Name"]').setValue('ThePlus1Name')
        component.find('input[name="children"][value="true"]').trigger('change')
        await nextTick()

        component
          .find('input[name="meal-Gens 1"][value="fish"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 2"][value="meat"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 3"][value="child"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 4"][value="child"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 5"][value="fish"]')
          .trigger('change')
        component
          .find('input[name="meal-ThePlus1Name"][value="fish"]')
          .trigger('change')

        component
          .find('textarea[name="mealComment"]')
          .setValue('I like poultry')

        component.find('textarea[name="comment"]').setValue('This is a comment')

        component.find('input[name="cgu"]').setChecked()

        await nextTick()
        component.find('form').trigger('submit')
        await nextTick()

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining(
            'Ils viennent à : cityHall, church, wineReception, party, after.',
          ),
        )

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('- Gens 1 : mangera du poisson.'),
        )
        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('- Gens 2 : mangera de la viande rouge.'),
        )
        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('- Gens 3 : mangera le menu enfant.'),
        )
        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('- Gens 4 : mangera le menu enfant.'),
        )
        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('- Gens 5 : mangera du poisson.'),
        )
        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('- ThePlus1Name : mangera du poisson.'),
        )

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('"I like poultry"'),
        )

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('"This is a comment"'),
        )
      })

      it("should send a less loong message when children can't come  and plus 1 neither", async () => {
        const component = mount(Page, config)

        await nextTick()

        component.find('[value="cityHall"]').trigger('change')
        component.find('[value="church"]').trigger('change')
        component.find('[value="wineReception"]').trigger('change')
        component.find('[value="party"]').trigger('change')
        component.find('[value="after"]').trigger('change')

        component.find('input[name="plus1"][value="no"]').trigger('change')
        await nextTick()
        component
          .find('input[name="children"][value="false"]')
          .trigger('change')
        await nextTick()

        component
          .find('input[name="meal-Gens 1"][value="fish"]')
          .trigger('change')
        component
          .find('input[name="meal-Gens 2"][value="meat"]')
          .trigger('change')

        component
          .find('textarea[name="mealComment"]')
          .setValue('I like poultry')

        component.find('textarea[name="comment"]').setValue('This is a comment')

        component.find('input[name="cgu"]').setChecked()

        await nextTick()
        component.find('form').trigger('submit')
        await nextTick()

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining(
            'Ils viennent à : cityHall, church, wineReception, party, after.',
          ),
        )

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('- Gens 1 : mangera du poisson.'),
        )
        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('- Gens 2 : mangera de la viande rouge.'),
        )
        expect(console.info).not.toHaveBeenCalledWith(
          expect.stringContaining('- Gens 3 : mangera le menu enfant.'),
        )
        expect(console.info).not.toHaveBeenCalledWith(
          expect.stringContaining('- Gens 4 : mangera le menu enfant.'),
        )
        expect(console.info).not.toHaveBeenCalledWith(
          expect.stringContaining('- Gens 5 : mangera du poisson.'),
        )
        expect(console.info).not.toHaveBeenCalledWith(
          expect.stringContaining('- ThePlus1Name : mangera du poisson.'),
        )

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('Pas de plus 1.'),
        )
        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('Les enfants ne viennent pas.'),
        )

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('"I like poultry"'),
        )

        expect(console.info).toHaveBeenCalledWith(
          expect.stringContaining('"This is a comment"'),
        )
      })
    })
  })
})
