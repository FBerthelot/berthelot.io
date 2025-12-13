import { mount, shallowMount } from '@vue/test-utils'
import * as data from '../01_shared/finalInvitations.data'
import MainPage from '~/pages/mariage/[invite]/index.vue'
import { nextTick } from 'vue'

vi.mock('../01_shared/finalInvitations.data', () => {
  return {
    invitations: [
      {
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
      },
    ],
  }
})

describe('MainPage', () => {
  let config
  let invitation

  beforeEach(() => {
    config = {
      global: {
        stubs: ['nuxt-link', 'Mariage00DesignSystemAnimation'],
      },
    }

    globalThis.useI18n = () => {
      return {
        t: (key) => key,
      }
    }
    globalThis.useLocalePath = () => (path) => path
    globalThis.definePageMeta = vi.fn()
    globalThis.useSeoMeta = vi.fn()
    globalThis.useRoute = vi.fn(() => ({
      params: { invite: 'idOfTheInvitation' },
      query: { noAnimation: true },
    }))
    globalThis.useRuntimeConfig = vi.fn(() => ({
      public: {},
    }))

    invitation = data.invitations[0]
    invitation.invitedTo = {
      cityHall: true,
      church: true,
      wineReception: true,
      party: true,
      after: true,
    }

    vi.doMock('fireworks-js', () => {
      return {
        Fireworks: class fireworksç {
          constructor() {
            this.start = vi.fn()
            this.stop = vi.fn()
            this.clear = vi.fn()
          }
        },
      }
    })

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  const tick = () => {
    vi.doMock('fireworks-js', () => {
      return {
        Fireworks: class fireworksç {
          constructor() {
            this.start = vi.fn()
            this.stop = vi.fn()
            this.clear = vi.fn()
          }
        },
      }
    })

    return nextTick()
  }

  it('should display cannot found message when invitation not exist', async () => {
    globalThis.useRoute.mockImplementation(() => ({
      params: {
        invite: 'notInvited',
      },
      query: { noAnimation: true },
    }))

    const component = shallowMount(MainPage, config)
    await tick()

    expect(component.html()).toContain('not_found.p1')
  })

  it('should not display cannot found message when invitation exist', async () => {
    const component = mount(MainPage, config)

    await tick()

    expect(component.html()).not.toContain('not_found.p1')
  })

  describe.skip('when invitation exist', () => {
    it('should display the council when invited', async () => {
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).toContain('day1.council.title')
    })

    it('should not display the council when not invited', async () => {
      invitation.invitedTo.cityHall = false
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).not.toContain('day1.council.title')
    })

    it('should display the church when invited', async () => {
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).toContain('day1.church.title')
    })

    it('should not display the church when not invited', async () => {
      invitation.invitedTo.church = false
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).not.toContain('day1.church.title')
    })

    it('should display the wineReception when only invited for that', async () => {
      invitation.invitedTo.party = false
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).toContain('day1.wineReceptionOnly.title')
    })

    it('should not display the wineReception when not invited', async () => {
      invitation.invitedTo.wineReception = false
      invitation.invitedTo.party = false
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).not.toContain('day1.wineReceptionOnly.title')
    })

    it('should not display the wineReception when invited for party', async () => {
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).not.toContain('day1.wineReceptionOnly.title')
    })

    it('should display the party when invited', async () => {
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).toContain('day1.allParty.title')
    })

    it('should not display the party when not invited', async () => {
      invitation.invitedTo.party = false
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).not.toContain('day1.allParty.title')
    })

    it('should display the after when invited', async () => {
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).toContain('day2.comeback.title')
    })

    it('should not display the after when not invited', async () => {
      invitation.invitedTo.after = false
      const component = mount(MainPage, config)

      await tick()

      expect(component.html()).not.toContain('day2.comeback.title')
    })
  })
})
