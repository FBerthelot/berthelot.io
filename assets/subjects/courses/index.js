import angularCourse from './angular'
import javaScript from './javaScript'
import esModules from './esmodules'
import redux from './redux'
import javascriptCraftmanship from './javascriptCraftmanship'
import typescript from './typescript'

export default [
  javaScript,
  javascriptCraftmanship,
  esModules,
  typescript,
  angularCourse,
  redux,
].map((s) => ({ ...s, type: 'course' }))
