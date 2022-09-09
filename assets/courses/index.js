import angularCourse from './angular'
import javaScript from './javaScript'
import esModules from './esmodules'
import redux from './redux'
import javascriptCraftmanship from './javascriptCraftmanship'
import typescript from './typescript'
import gitflow from './git-flow'

export const courses = [
  javaScript,
  javascriptCraftmanship,
  esModules,
  typescript,
  angularCourse,
  gitflow,
  redux,
].map((s) => ({ ...s, type: 'course' }))
