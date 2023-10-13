import { mount } from '@vue/test-utils'
import { listAll, getDownloadURL } from 'firebase/storage'
import { nextTick } from 'vue'
import PhotoDisplayer from '~/pages/mariage/43999e26-0e14-4035-bbb8-displayer-9a00bcdc50da.vue'
import * as ImageUtils from '~/components/mariage/00_shared/images.utils'

jest.mock(
  '~/components/mariage/00_shared/assets/no_network.png',
  () => 'no_network_img.png',
)

jest.mock(
  '~/components/mariage/00_shared/assets/share-photos.png',
  () => 'share-photo.png',
)

jest.mock('firebase/storage', () => {
  return {
    getStorage: jest.fn(() => 'storage'),
    ref: jest.fn((...a) => a.join('')),
    listAll: jest.fn(),
    getDownloadURL: jest.fn((a) => Promise.resolve(a)),
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
    jest.useFakeTimers()
    listAll.mockImplementation(() =>
      Promise.resolve({
        items: [
          {
            _location: {
              path_: 'photos/p1.png',
            },
          },
          {
            _location: {
              path_: 'photos/p2.png',
            },
          },
        ],
      }),
    )

    jest
      .spyOn(ImageUtils, 'isImageLoaded')
      .mockImplementation(() => Promise.resolve())

    jest.spyOn(Math, 'random').mockImplementation(() => 0.999999999999999)
  })

  afterEach(() => {
    listAll.mockClear()
    localStorage.clear()
    jest.spyOn(Math, 'random').mockClear()
    jest.spyOn(ImageUtils, 'isImageLoaded').mockClear()
    jest.useRealTimers()
  })

  describe('when starting the app for the first time', () => {
    it('should display the annimation', () => {
      const component = mount(PhotoDisplayer, config)

      expect(component.html()).toContain('animation-stub')
    })

    it('should call the firestore list image to prepare chose next image to display', async () => {
      await mount(PhotoDisplayer, config)

      expect(listAll).toHaveBeenCalledWith('storage/photos')
      expect(listAll).toHaveBeenCalledTimes(1)
    })

    it('should insert the asset list in localstorage with a view counter', async () => {
      await mount(PhotoDisplayer, config)

      expect(
        JSON.parse(localStorage.getItem('wedding-asset-displayer')),
      ).toEqual({
        animation: 1,
        'photos/p1.png': 0,
        'photos/p2.png': 0,
      })
    })

    it('should preload the asset P1 when luck is around 1', async () => {
      await mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()

      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(1)
      expect(ImageUtils.isImageLoaded).toHaveBeenCalledWith(
        'storagephotos/p2.png',
      )
    })

    it('should preload the asset P2 when luck is around 0', async () => {
      jest.spyOn(Math, 'random').mockImplementation(() => 0)
      mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()

      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(1)
      expect(ImageUtils.isImageLoaded).toHaveBeenCalledWith(
        'storagephotos/p1.png',
      )
    })

    it('should display the asset p2 when image ended the preloading', async () => {
      const component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      expect(component.find('img').html()).toContain('storagephotos/p2.png')
    })

    it('should still display animation and have the image in background', async () => {
      const component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      expect(component.find('img').html()).not.toContain('current-asset')
      expect(component.find('animation-stub').html()).toContain('current-asset')
    })

    it('should switch from animation to new asset when 20s elapsed', async () => {
      const component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      expect(component.find('img').html()).toContain('current-asset')
      expect(component.find('animation-stub').html()).not.toContain(
        'current-asset',
      )
    })
  })

  describe('When annimation between assets is over', () => {
    let component
    beforeEach(async () => {
      component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      // Animation over
      jest.advanceTimersByTime(5000)
      await nextTick()
    })

    it('should display the P2 img as current asset', () => {
      expect(component.findAll('img').at(1).html()).toContain(
        'storagephotos/p2.png',
      )
      expect(component.findAll('img').at(1).html()).toContain('current-asset')
    })

    it('should call the firestore list image to prepare chose next image to display', () => {
      expect(listAll).toHaveBeenCalledWith('storage/photos')
      expect(listAll).toHaveBeenCalledTimes(2)
    })

    it('should insert the asset list in localstorage with a view counter', () => {
      expect(
        JSON.parse(localStorage.getItem('wedding-asset-displayer')),
      ).toEqual({
        animation: 1,
        'photos/p1.png': 0,
        'photos/p2.png': 1,
      })
    })

    it('should preload the asset P1 when luck is around 1', async () => {
      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()

      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(2)
      expect(ImageUtils.isImageLoaded).toHaveBeenLastCalledWith(
        'storagephotos/p1.png',
      )
    })

    it('should preload the asset P1 when luck is around 0', async () => {
      jest.spyOn(Math, 'random').mockImplementation(() => 0)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()

      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(2)
      expect(ImageUtils.isImageLoaded).toHaveBeenLastCalledWith(
        'storagephotos/p1.png',
      )
    })

    it('should display the asset p1 when image ended the preloading', async () => {
      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      expect(component.findAll('img').at(0).html()).toContain(
        'storagephotos/p1.png',
      )
    })

    it('should still display P2 asset and have the asset P1 in background', async () => {
      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      expect(component.findAll('img').at(0).html()).not.toContain(
        'current-asset',
      )
      expect(component.findAll('img').at(0).html()).toContain(
        'storagephotos/p1.png',
      )

      expect(component.findAll('img').at(1).html()).toContain('current-asset')
      expect(component.findAll('img').at(1).html()).toContain(
        'storagephotos/p2.png',
      )
    })

    it('should switch from animation to new asset when 20s elapsed', async () => {
      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      expect(component.findAll('img').at(0).html()).toContain('current-asset')
      expect(component.findAll('img').at(1).html()).not.toContain(
        'current-asset',
      )
    })
  })

  describe('when starting the app but not the first time', () => {
    beforeEach(() => {
      localStorage.setItem(
        'wedding-asset-displayer',
        JSON.stringify({
          animation: 59,
          'photos/p1.png': 40,
          'photos/p2.png': 60,
        }),
      )
    })

    it('should display the annimation', () => {
      const component = mount(PhotoDisplayer, config)

      expect(component.html()).toContain('animation-stub')
    })

    it('should display P1 when switching between asset is over', async () => {
      const component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      // Animation over
      jest.advanceTimersByTime(5000)
      await nextTick()

      expect(component.findAll('img').at(0).html()).toContain(
        'storagephotos/p1.png',
      )
      expect(component.findAll('img').at(0).html()).toContain('current-asset')
    })

    it('should display P2 when displayed P1', async () => {
      const component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      // Animation over
      jest.advanceTimersByTime(5000)
      await nextTick()

      /** next image */
      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      // Animation over
      jest.advanceTimersByTime(5000)
      await nextTick()

      expect(component.findAll('img').at(0).html()).toContain(
        'storagephotos/p2.png',
      )
      expect(component.findAll('img').at(0).html()).toContain('current-asset')
    })

    it('should display animation when displayed P1 then P2 then P1', async () => {
      const component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      // Animation over
      jest.advanceTimersByTime(5000)
      await nextTick()

      expect(component.findAll('img').at(0).html()).toContain(
        'storagephotos/p1.png',
      )
      expect(component.findAll('img').at(0).html()).toContain('current-asset')

      /** next image */
      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      // Animation over
      jest.advanceTimersByTime(5000)
      await nextTick()

      expect(component.findAll('img').at(0).html()).toContain(
        'storagephotos/p2.png',
      )
      expect(component.findAll('img').at(0).html()).toContain('current-asset')

      /** next image */
      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      // Animation over
      jest.advanceTimersByTime(5000)
      await nextTick()

      expect(component.findAll('img').at(1).html()).toContain(
        'storagephotos/p1.png',
      )
      expect(component.findAll('img').at(1).html()).toContain('current-asset')

      /** next image */
      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      // Animation over
      jest.advanceTimersByTime(5000)
      await nextTick()

      expect(component.find('animation-stub').html()).toContain('current-asset')
    })
  })

  describe('when firebase is unavailable to get the image list', () => {
    beforeEach(() => {
      listAll.mockImplementation(() => Promise.reject(new Error('Pas de réso')))

      jest.spyOn(console, 'error').mockImplementation()
    })

    afterEach(() => {
      listAll.mockImplementation(() => {})

      // eslint-disable-next-line no-console
      console.error.mockClear()
    })

    it('should display a litle icon', async () => {
      const component = mount(PhotoDisplayer, config)

      await nextTick()

      expect(component.get('#error-img').isVisible()).toBe(true)
    })

    it('should make icon disapear when firebase is available again', async () => {
      const component = mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()

      jest.advanceTimersByTime(20000)
      await nextTick()

      expect(component.get('#error-img').isVisible()).toBe(true)

      listAll.mockImplementation(() =>
        Promise.resolve({
          items: [
            {
              _location: {
                path_: 'photos/p1.png',
              },
            },
          ],
        }),
      )

      jest.advanceTimersByTime(5000)
      await nextTick()
      await nextTick()
      await nextTick()

      expect(component.get('#error-img').isVisible()).toBe(false)
      expect(component.find('img').html()).toContain('storagephotos/p1.png')
    })

    it('should select from already fetched asset ', async () => {
      localStorage.setItem(
        'wedding-asset-displayer',
        JSON.stringify({
          animation: 0,
          'photos/p1.png': 0,
          'photos/p2.png': 0,
        }),
      )
      const component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      expect(component.find('img').html()).toContain('storagephotos/p2.png')
    })

    it('should select animation when it never fetch any asset', async () => {
      const component = mount(PhotoDisplayer, config)

      // Choose image
      await nextTick()
      // End of download preload image src
      await nextTick()
      // End of image prealoading
      await nextTick()

      expect(component.findAll('animation-stub').length).toBe(2)
    })
  })

  describe('when firebase download url is unavailable', () => {
    beforeEach(() => {
      getDownloadURL.mockImplementation(() =>
        Promise.reject(new Error("Bouuh tu l'aura pas")),
      )

      jest.spyOn(console, 'error').mockImplementation()
    })

    afterEach(() => {
      getDownloadURL.mockImplementation((a) => Promise.resolve(a))

      // eslint-disable-next-line no-console
      console.error.mockClear()
    })

    it('should display a little icon', async () => {
      const component = mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()
      await nextTick()

      expect(component.get('#error-img-2').isVisible()).toBe(true)
    })

    it('should make icon disapear when firebase is available again', async () => {
      const component = mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()
      await nextTick()

      expect(component.get('#error-img-2').isVisible()).toBe(true)

      getDownloadURL.mockImplementation((a) => Promise.resolve(a))

      jest.advanceTimersByTime(20000)
      await nextTick()

      jest.advanceTimersByTime(5000)
      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()

      expect(component.get('#error-img-2').isVisible()).toBe(false)
      expect(component.find('img').html()).toContain('storagephotos/p2.png')
    })

    it('should select another asset (animation)', async () => {
      const component = mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()
      await nextTick()

      expect(component.get('#error-img-2').isVisible()).toBe(true)
    })
  })

  describe('when download image fail', () => {
    beforeEach(() => {
      jest
        .spyOn(ImageUtils, 'isImageLoaded')
        .mockImplementation(() => Promise.reject(new Error('bouuh')))

      jest.spyOn(console, 'error').mockImplementation()
    })

    afterEach(() => {
      // eslint-disable-next-line no-console
      console.error.mockClear()
    })

    it('should display a little icon', async () => {
      const component = mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()

      expect(component.get('#error-img-3').isVisible()).toBe(true)
    })

    it('should make icon disapear when firebase is available again', async () => {
      const component = mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()

      expect(component.get('#error-img-3').isVisible()).toBe(true)

      jest
        .spyOn(ImageUtils, 'isImageLoaded')
        .mockImplementation(() => Promise.resolve())

      jest.advanceTimersByTime(20000)
      await nextTick()

      jest.advanceTimersByTime(5000)
      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()

      expect(component.get('#error-img-3').isVisible()).toBe(false)
      expect(component.find('img').html()).toContain('storagephotos/p2.png')
    })

    it('should wait 5 secondes and retry to download the image it', async () => {
      mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()

      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(1)

      jest.advanceTimersByTime(5000)
      await nextTick()
      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(2)
    })

    it('should wait 5 secondes and retry to download the image it when fail a 2nd time', async () => {
      mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()

      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(1)

      jest.advanceTimersByTime(5000)
      await nextTick()
      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(2)

      await nextTick()
      jest.advanceTimersByTime(5000)
      await nextTick()
      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(3)
    })

    it('should select animation asset when 3rd try fail', async () => {
      const component = mount(PhotoDisplayer, config)

      await nextTick()
      await nextTick()
      await nextTick()
      await nextTick()

      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(1)
      expect(component.findAll('animation-stub').length).toBe(1)
      expect(
        component.findAll('animation-stub').at(0).attributes().class,
      ).toContain('current-asset')

      jest.advanceTimersByTime(5000)
      await nextTick()
      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(2)
      expect(component.findAll('animation-stub').length).toBe(1)
      expect(
        component.findAll('animation-stub').at(0).attributes().class,
      ).toContain('current-asset')

      await nextTick()
      jest.advanceTimersByTime(5000)
      await nextTick()
      expect(ImageUtils.isImageLoaded).toHaveBeenCalledTimes(3)
      expect(component.findAll('animation-stub').length).toBe(1)
      expect(
        component.findAll('animation-stub').at(0).attributes().class,
      ).toContain('current-asset')

      await nextTick()
      await nextTick()
      jest.advanceTimersByTime(20000)
      await nextTick()
      expect(component.findAll('animation-stub').length).toBe(2)
      expect(
        component.findAll('animation-stub').at(1).attributes().class,
      ).toContain('current-asset')
    })
  })
})
