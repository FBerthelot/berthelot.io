import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import { nextTick } from 'vue'
import Page from '~/pages/mariage/_invite/answer.vue'

jest.mock('../00_shared/sample.data.js', () => {
  return {
    invitationsMock: [
      {
        "Id de l'invitation": 'futursmaries',
        "Nom de l'invitation (Web)": 'La famille Nigzy',
        'Personne 1': 'Gens 1',
        'Personne 2': 'Gens 2',
        'Personne 3': 'Gens 3',
        'Personne 4': 'Gens 4',
        'Personne 5': 'Gens 5',
        'Question sur +1': 'Oui',
        'Nom du +1': '',
        'Question sur Enfant': 'Oui',
        'Invités pour mairie': 'Oui',
        'Invités pour église': 'Oui',
        "Invités pour vin d'honneur": 'Oui',
        'Invités pour soirée': 'Oui',
        'Invités pour retour': 'Oui',
        'Placeholder allergies': 'Coucou placeholder allergies',
        'Placeholder commentaire': 'Coucou placeholder commentaire',
        'A répondu': 'Non',
      },
    ],
    allPeoplesMock: [
      {
        Nom: 'Gens 1',
        "Tranche d'age": '17 - 79 ans',
      },
      {
        Nom: 'Gens 2',
        "Tranche d'age": '17 - 79 ans',
      },
      {
        Nom: 'Gens 3',
        "Tranche d'age": '0 - 3 ans',
      },
      {
        Nom: 'Gens 4',
        "Tranche d'age": '4 - 12 ans',
      },
      {
        Nom: 'Gens 5',
        "Tranche d'age": '13 - 17 ans',
      },
    ],
  }
})

describe('MainPage', () => {
  let config

  beforeEach(() => {
    config = {
      stubs: ['nuxt-link'],
      mocks: {
        $route: {
          query: {
            noAnimation: true,
          },
          params: {
            invite: 'idOfTheInvitation',
          },
        },
        $router: {
          push: jest.fn(),
        },
        $t: jest.fn((key) => key),
        $tc: jest.fn((key, nb) => key + nb),
        $i18n: {
          locale: 'fr',
        },
        switchLocalePath: jest.fn(),
        localePath: jest.fn((arg) => arg),
        $config: {
          SHEETDB_URL: 'teeest',
          SLACK_URL: 'slackUrl',
        },
      },
    }

    global.fetch = jest.fn()

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('when use the fake data with id futursmaries', () => {
    beforeEach(() => {
      config.mocks.$route.params.invite = 'futursmaries'
    })

    it('should not call fetch', () => {
      mount(Page, config)

      expect(global.fetch).not.toHaveBeenCalled()
    })

    it('should display the name of invited', () => {
      const component = mount(Page, config)
      expect(component.find('#animation')).toBeTruthy()
    })
  })

  describe('when id is not test data', () => {
    let invitationsMock, allPeoplesMock
    beforeEach(() => {
      invitationsMock = [
        {
          "Id de l'invitation": 'idOfTheInvitation',
          "Nom de l'invitation (Web)": 'La famille Nigzy',
          'Personne 1': 'Gens 1',
          'Personne 2': 'Gens 2',
          'Personne 3': 'Gens 3',
          'Personne 4': 'Gens 4',
          'Personne 5': 'Gens 5',
          'Question sur +1': 'Oui',
          'Nom du +1': '',
          'Question sur Enfant': 'Oui',
          'Invités pour mairie': 'Oui',
          'Invités pour église': 'Oui',
          "Invités pour vin d'honneur": 'Oui',
          'Invités pour soirée': 'Oui',
          'Invités pour retour': 'Oui',
          'Placeholder allergies': 'Coucou placeholder allergies',
          'Placeholder commentaire': 'Coucou placeholder commentaire',
        },
      ]

      allPeoplesMock = [
        {
          Nom: 'Gens 1',
          "Tranche d'age": '17 - 79 ans',
        },
        {
          Nom: 'Gens 2',
          "Tranche d'age": '17 - 79 ans',
        },
        {
          Nom: 'Gens 3',
          "Tranche d'age": '0 - 3 ans',
        },
        {
          Nom: 'Gens 4',
          "Tranche d'age": '4 - 12 ans',
        },
        {
          Nom: 'Gens 5',
          "Tranche d'age": '13 - 17 ans',
        },
      ]

      global.fetch.mockImplementation((url) => {
        if (url === 'teeest?sheet=Invitations') {
          return Promise.resolve({
            json: jest.fn(() => Promise.resolve(invitationsMock)),
          })
        }
        if (url === 'teeest?sheet=Liste des invités') {
          return Promise.resolve({
            json: jest.fn(() => Promise.resolve(allPeoplesMock)),
          })
        }
      })
    })

    it('should call sheetDB API', async () => {
      mount(Page, config)

      await flushPromises()

      expect(global.fetch).toHaveBeenCalledWith('teeest?sheet=Invitations')
      expect(global.fetch).toHaveBeenCalledWith(
        'teeest?sheet=Liste des invités'
      )
    })

    it('should display cannot found message when invitation not exist', async () => {
      config.mocks.$route.params.invite = 'notInvited'
      const component = mount(Page, config)

      await flushPromises()

      expect(component.html()).toContain('fatal_error.p1')
    })

    it('should not display cannot found message when invitation exist', async () => {
      const component = mount(Page, config)

      await flushPromises()

      expect(component.html()).not.toContain('fatal_error.p1')
    })

    describe('when invitation exist', () => {
      it('should display the council when invited', async () => {
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).toContain('attending.cityHall')
      })

      it('should not display the council when not invited', async () => {
        invitationsMock[0]['Invités pour mairie'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).not.toContain('attending.cityHall')
      })

      it('should display the church when invited', async () => {
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).toContain('attending.church')
      })

      it('should not display the church when not invited', async () => {
        invitationsMock[0]['Invités pour église'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).not.toContain('attending.church')
      })

      it('should display the wineReception when invited for that', async () => {
        invitationsMock[0]['Invités pour soirée'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).toContain('attending.wineReception')
      })

      it('should not display the wineReception when not invited', async () => {
        invitationsMock[0]["Invités pour vin d'honneur"] = 'Non'
        invitationsMock[0]['Invités pour soirée'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).not.toContain('attending.wineReception')
      })

      it('should display the party when invited', async () => {
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).toContain('attending.party')
      })

      it('should not display the party when not invited', async () => {
        invitationsMock[0]['Invités pour soirée'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).not.toContain('attending.party')
      })

      it('should display the after when invited', async () => {
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).toContain('attending.after')
      })

      it('should not display the after when not invited', async () => {
        invitationsMock[0]['Invités pour retour'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).not.toContain('attending.after')
      })

      it('should deselect every other things when click on cant come', async () => {
        const component = mount(Page, config)

        await flushPromises()
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

        await flushPromises()

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

        await flushPromises()

        expect(component.html()).toContain('Gens 1')
        expect(component.html()).toContain('Gens 2')
      })

      it('should not display children when click on nothings', async () => {
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).not.toContain('Gens 3')
        expect(component.html()).not.toContain('Gens 4')
        expect(component.html()).not.toContain('Gens 5')
      })

      it('should display adults and children when click on yes on question children come', async () => {
        const component = mount(Page, config)

        await flushPromises()

        component.find('input[name="children"][value="true"]').trigger('change')
        await nextTick()

        expect(component.html()).toContain('Gens 1')
        expect(component.html()).toContain('Gens 2')
        expect(component.html()).toContain('Gens 3')
        expect(component.html()).toContain('Gens 4')
        expect(component.html()).toContain('Gens 5')
      })

      it('should not display children question when there is no question on children', async () => {
        invitationsMock[0]['Question sur Enfant'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(
          component.find('input[name="children"][value="true"]').exists()
        ).toBe(false)
      })

      it('should display adults and children when there is no question on children', async () => {
        invitationsMock[0]['Question sur Enfant'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).toContain('Gens 1')
        expect(component.html()).toContain('Gens 2')
        expect(component.html()).toContain('Gens 3')
        expect(component.html()).toContain('Gens 4')
        expect(component.html()).toContain('Gens 5')
      })

      it('should display the plus1 question when invitation say so', async () => {
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).toContain('plus1.question')
      })

      it('should not display the plus1 question when invitation say no', async () => {
        invitationsMock[0]['Question sur +1'] = 'Non'
        const component = mount(Page, config)

        await flushPromises()

        expect(component.html()).not.toContain('plus1.question')
      })

      it('should ask for plus1 meal when plus1name is filled', async () => {
        const component = mount(Page, config)

        await flushPromises()

        component.find('input[name="plus1"][value="yes"]').trigger('change')
        await nextTick()

        component.find('input[name="plus1Name"]').setValue('ThePlus1Name')
        await nextTick()

        expect(component.find('.meal-people').html()).toContain('ThePlus1Name')
      })

      it('should not ask for plus1 meal when plus1 question is no', async () => {
        const component = mount(Page, config)

        await flushPromises()

        component.find('input[name="plus1"][value="yes"]').trigger('change')
        await nextTick()

        component.find('input[name="plus1Name"]').setValue('ThePlus1Name')
        await nextTick()

        component.find('input[name="plus1"][value="no"]').trigger('change')
        await nextTick()

        expect(component.find('.meal-people').html()).not.toContain(
          'ThePlus1Name'
        )
      })

      describe('when validate the form', () => {
        it('should display errors on almost each fields when submiting form without enter values', async () => {
          const component = mount(Page, config)

          await flushPromises()

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

          await flushPromises()

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

          await flushPromises()

          component.find('[value="cityHall"]').trigger('change')
          component.find('[value="church"]').trigger('change')
          component.find('[value="wineReception"]').trigger('change')
          component.find('[value="party"]').trigger('change')
          component.find('[value="after"]').trigger('change')
          component.find('input[name="cgu"]').setChecked()
          component
            .find('textarea[name="comment"]')
            .setValue('This is a comment')

          await nextTick()

          component.find('form').trigger('submit')
          await nextTick()

          expect(global.fetch).toHaveBeenCalledTimes(2)
        })

        it('should not send anything the form when submiting invalid form', async () => {
          const component = mount(Page, config)

          await flushPromises()
          expect(global.fetch).toHaveBeenCalledTimes(2)

          component.find('form').trigger('submit')
          await nextTick()

          expect(global.fetch).toHaveBeenCalledTimes(2)
        })

        it('should send a request to slack when the form is valid', async () => {
          const component = mount(Page, config)

          await flushPromises()
          expect(global.fetch).toHaveBeenCalledTimes(2)

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
          component
            .find('textarea[name="comment"]')
            .setValue('This is a comment')
          component.find('input[name="cgu"]').setChecked()

          await nextTick()
          component.find('form').trigger('submit')
          await nextTick()

          expect(global.fetch).toHaveBeenCalledTimes(3)
          expect(global.fetch).toHaveBeenCalledWith('slackUrl', {
            method: 'POST',
            body: expect.anything(),
          })
        })

        it('should redirect to home page when the form is valid', async () => {
          const component = mount(Page, config)

          await flushPromises()
          expect(global.fetch).toHaveBeenCalledTimes(2)

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
          component
            .find('textarea[name="comment"]')
            .setValue('This is a comment')
          component.find('input[name="cgu"]').setChecked()

          await nextTick()
          component.find('form').trigger('submit')
          await nextTick()

          await flushPromises()

          expect(config.mocks.$router.push).toHaveBeenCalledTimes(1)
          expect(config.mocks.$router.push).toHaveBeenCalledWith(
            '/mariage/idOfTheInvitation?noAnimation=true'
          )
        })

        it('Should respond a understandable message when people cant come', async () => {
          const component = mount(Page, config)

          await flushPromises()
          expect(global.fetch).toHaveBeenCalledTimes(2)

          component.find('[value="cant"]').trigger('change')
          component.find('input[name="cgu"]').setChecked()
          component
            .find('textarea[name="comment"]')
            .setValue('This is a comment')

          await nextTick()
          component.find('form').trigger('submit')
          await nextTick()

          expect(global.fetch).toHaveBeenCalledTimes(3)
          const requestBody = global.fetch.mock.calls[2][1].body

          expect(requestBody).toContain('Ils ne peuvent pas venir.')

          expect(requestBody).toContain(
            ':speech_balloon: : \\"This is a comment\\"'
          )
        })

        it('should send a loong message when all field is filled', async () => {
          const component = mount(Page, config)

          await flushPromises()
          expect(global.fetch).toHaveBeenCalledTimes(2)

          component.find('[value="cityHall"]').trigger('change')
          component.find('[value="church"]').trigger('change')
          component.find('[value="wineReception"]').trigger('change')
          component.find('[value="party"]').trigger('change')
          component.find('[value="after"]').trigger('change')

          component.find('input[name="plus1"][value="yes"]').trigger('change')
          await nextTick()
          component.find('input[name="plus1Name"]').setValue('ThePlus1Name')
          component
            .find('input[name="children"][value="true"]')
            .trigger('change')
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

          component
            .find('textarea[name="comment"]')
            .setValue('This is a comment')

          component.find('input[name="cgu"]').setChecked()

          await nextTick()
          component.find('form').trigger('submit')
          await nextTick()

          expect(global.fetch).toHaveBeenCalledTimes(3)
          const requestBody = global.fetch.mock.calls[2][1].body

          expect(requestBody).toContain(
            'Ils viennent à : cityHall, church, wineReception, party, after.'
          )

          expect(requestBody).toContain('- Gens 1 : mangera du poisson.')
          expect(requestBody).toContain(
            '- Gens 2 : mangera de la viande rouge.'
          )
          expect(requestBody).toContain('- Gens 3 : mangera le menu enfant.')
          expect(requestBody).toContain('- Gens 4 : mangera le menu enfant.')
          expect(requestBody).toContain('- Gens 5 : mangera du poisson.')
          expect(requestBody).toContain('- ThePlus1Name : mangera du poisson.')

          expect(requestBody).toContain(':poultry_leg: : \\"I like poultry\\"')

          expect(requestBody).toContain(
            ':speech_balloon: : \\"This is a comment\\"'
          )
        })

        it("should send a less loong message when children can't come  and plus 1 neither", async () => {
          const component = mount(Page, config)

          await flushPromises()
          expect(global.fetch).toHaveBeenCalledTimes(2)

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

          component
            .find('textarea[name="comment"]')
            .setValue('This is a comment')

          component.find('input[name="cgu"]').setChecked()

          await nextTick()
          component.find('form').trigger('submit')
          await nextTick()

          expect(global.fetch).toHaveBeenCalledTimes(3)
          const requestBody = global.fetch.mock.calls[2][1].body

          expect(requestBody).toContain(
            'Ils viennent à : cityHall, church, wineReception, party, after.'
          )

          expect(requestBody).toContain('- Gens 1 : mangera du poisson.')
          expect(requestBody).toContain(
            '- Gens 2 : mangera de la viande rouge.'
          )
          expect(requestBody).not.toContain(
            '- Gens 3 : mangera le menu enfant.'
          )
          expect(requestBody).not.toContain(
            '- Gens 4 : mangera le menu enfant.'
          )
          expect(requestBody).not.toContain('- Gens 5 : mangera du poisson.')
          expect(requestBody).not.toContain(
            '- ThePlus1Name : mangera du poisson.'
          )

          expect(requestBody).toContain('Pas de plus 1.')
          expect(requestBody).toContain('Les enfants ne viennent pas.')

          expect(requestBody).toContain(':poultry_leg: : \\"I like poultry\\"')

          expect(requestBody).toContain(
            ':speech_balloon: : \\"This is a comment\\"'
          )
        })
      })
    })
  })
})
