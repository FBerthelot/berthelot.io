import { mount } from '@vue/test-utils'
import { listAll } from 'firebase/storage'
import PhotoDisplayer from '~/pages/mariage/43999e26-0e14-4035-bbb8-displayer-9a00bcdc50da.vue'

jest.mock('firebase/storage', () => {
  return {
    getStorage: jest.fn(() => 'storage'),
    ref: jest.fn((...a) => a.join('')),
    listAll: jest.fn(),
    getDownloadURL: jest.fn(),
  }
})

describe('Photo displayer', () => {
  const config = {
    stubs: ['Animation'],
    mocks: {
      $t: jest.fn((key) => key),
      $tc: jest.fn((key, nb) => key + nb),
      $i18n: {
        locale: 'fr',
      },
      switchLocalePath: jest.fn(),
      localePath: jest.fn(),
      $config: {
        FIREBASE_API_KEY: 'FIREBASE_API_KEY',
        FIREBASE_AUTH_DOMAIN: 'FIREBASE_AUTH_DOMAIN',
        FIREBASE_PROJECT_ID: 'FIREBASE_PROJECT_ID',
        FIREBASE_STORAGE_BUCKET: 'FIREBASE_STORAGE_BUCKET',
        FIREBASE_MESSAGING_SENDER_ID: 'FIREBASE_MESSAGING_SENDER_ID',
        FIREBASE_APP_ID: 'FIREBASE_APP_ID',
      },
    },
  }

  beforeEach(() => {
    listAll.mockImplementation(() =>
      Promise.resolve({
        items: [],
      })
    )
  })

  afterEach(() => {
    listAll.mockClear()
    localStorage.clear()
  })

  describe('when starting the app', () => {
    it('should display the annimation', () => {
      const component = mount(PhotoDisplayer, config)

      expect(component.html()).toContain('animation-stub')
    })

    it('should call the firestore list image to prepare chose next image to display', async () => {
      await mount(PhotoDisplayer, config)

      expect(listAll).toHaveBeenCalledWith('storage/photos')
      expect(listAll).toHaveBeenCalledTimes(1)
    })

    it.todo('should do what when firestore list image fail to load image ?')

    it('should insert the asset list in localstorage with a view counter', async () => {
      await mount(PhotoDisplayer, config)

      expect(
        JSON.parse(localStorage.getItem('wedding-asset-displayer'))
      ).toEqual({
        animation: 1,
      })
    })

    it('should choose a random asset in the list of firestore image', async () => {
      await mount(PhotoDisplayer, config)

      expect(listAll).toHaveBeenCalledWith('storage/photos')
      expect(listAll).toHaveBeenCalledTimes(1)
    })
  })

  describe('When annimation is about to switch to next asset', () => {})

  describe('Random asset selector', () => {
    it.todo('toto')
  })
})
