import designerDeveloperCreonsDifferenceTalk from './2019-designer-developer-creons-difference'
import reactFiberTalk from './2019-react-fiber'
import webVRTalk from './2018-webVR'
import webAudioTalk from './2017-webAudio'
import packageAllInclusiveTalk from './2017-packageAllInclusive'

export const talks = [
  designerDeveloperCreonsDifferenceTalk,
  reactFiberTalk,
  webVRTalk,
  webAudioTalk,
  packageAllInclusiveTalk,
].map((s) => ({ ...s, type: 'talk' }))
