import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import MainPage from '~/pages/mariage/_invite/index.vue'

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

jest.mock('fireworks-js', () => {
  return {
    Fireworks: class fireworks {
      start = jest.fn()
      stop = jest.fn()
      clear = jest.fn()
    },
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
        $t: jest.fn((key) => key),
        $tc: jest.fn((key, nb) => key + nb),
        $i18n: {
          locale: 'fr',
        },
        switchLocalePath: jest.fn(),
        localePath: jest.fn(),
        $config: {
          SHEETDB_URL: 'teeest',
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
      mount(MainPage, config)

      expect(global.fetch).not.toHaveBeenCalled()
    })

    it('should display the animation', () => {
      const component = mount(MainPage, config)
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
      mount(MainPage, config)

      await flushPromises()

      expect(global.fetch).toHaveBeenCalledWith('teeest?sheet=Invitations')
      expect(global.fetch).toHaveBeenCalledWith(
        'teeest?sheet=Liste des invités'
      )
    })

    it('should display cannot found message when invitation not exist', async () => {
      config.mocks.$route.params.invite = 'notInvited'
      const component = mount(MainPage, config)

      await flushPromises()

      expect(component.html()).toContain('not_found.p1')
    })

    it('should not display cannot found message when invitation exist', async () => {
      const component = mount(MainPage, config)

      await flushPromises()

      expect(component.html()).not.toContain('not_found.p1')
    })

    describe('when invitation exist', () => {
      it('should display the council when invited', async () => {
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).toContain('day1.council.title')
      })

      it('should not display the council when not invited', async () => {
        invitationsMock[0]['Invités pour mairie'] = 'Non'
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).not.toContain('day1.council.title')
      })

      it('should display the church when invited', async () => {
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).toContain('day1.church.title')
      })

      it('should not display the church when not invited', async () => {
        invitationsMock[0]['Invités pour église'] = 'Non'
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).not.toContain('day1.church.title')
      })

      it('should display the wineReception when only invited for that', async () => {
        invitationsMock[0]['Invités pour soirée'] = 'Non'
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).toContain('day1.wineReceptionOnly.title')
      })

      it('should not display the wineReception when not invited', async () => {
        invitationsMock[0]["Invités pour vin d'honneur"] = 'Non'
        invitationsMock[0]['Invités pour soirée'] = 'Non'
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).not.toContain('day1.wineReceptionOnly.title')
      })

      it('should not display the wineReception when invited for party', async () => {
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).not.toContain('day1.wineReceptionOnly.title')
      })

      it('should display the party when invited', async () => {
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).toContain('day1.allParty.title')
      })

      it('should not display the party when not invited', async () => {
        invitationsMock[0]['Invités pour soirée'] = 'Non'
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).not.toContain('day1.allParty.title')
      })

      it('should display the after when invited', async () => {
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).toContain('day2.comeback.title')
      })

      it('should not display the after when not invited', async () => {
        invitationsMock[0]['Invités pour retour'] = 'Non'
        const component = mount(MainPage, config)

        await flushPromises()

        expect(component.html()).not.toContain('day2.comeback.title')
      })
    })
  })
})
