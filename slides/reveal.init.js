'use strict'
/* global Reveal: true */

Reveal.initialize({
  // Display controls in the bottom right corner
  controls: true,

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
  slideNumber: true,

  // Push each slide change to the browser history
  history: false,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Enable the slide overview mode
  overview: true,

  // Vertical centering of slides
  center: true,

  // Enables touch navigation on devices with touch input
  touch: true,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // Turns fragments on and off globally
  fragments: true,

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,

  // Flags if we should show a help overlay when the questionmark
  // key is pressed
  help: true,

  // Flags if speaker notes should be visible to all viewers
  showNotes: false,

  // Number of milliseconds between automatically proceeding to the
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  autoSlide: 0,

  // Stop auto-sliding after user input
  autoSlideStoppable: true,

  // Enable slide navigation via mouse wheel
  mouseWheel: false,

  // Hides the address bar on mobile devices
  hideAddressBar: true,

  // Opens links in an iframe preview overlay
  previewLinks: true,

  // Transition style
  transition: 'default', // None/fade/slide/convex/concave/zoom

  // Transition speed
  transitionSpeed: 'default', // Default/fast/slow

  // Transition style for full page slide backgrounds
  backgroundTransition: 'default', // None/fade/slide/convex/concave/zoom

  // Number of slides away from the current that are visible
  viewDistance: 3,

  // Parallax background image
  parallaxBackgroundImage: '', // E.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

  // Parallax background size
  parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

  // Number of pixels to move the parallax background per slide
  // - Calculated automatically unless specified
  // - Set to 0 to disable movement along an axis
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,

  dependencies: [
    // Interpret Markdown in <section> elements
    {
      src: '/reveal/plugin/markdown/marked.js',
      condition() {
        return Boolean(document.querySelector('[data-markdown]'))
      },
    },
    {
      src: '/reveal/plugin/markdown/markdown.js',
      condition() {
        return Boolean(document.querySelector('[data-markdown]'))
      },
    },

    // Syntax highlight for <code> elements
    {
      src: '/reveal/plugin/highlight/highlight.js',
      async: true,
      callback() {
        hljs.initHighlightingOnLoad() // eslint-disable-line
      },
    },

    // Zoom in and out with Alt+click
    { src: '/reveal/plugin/zoom-js/zoom.js', async: true },

    // Speaker notes
    { src: '/reveal/plugin/notes/notes.js', async: true },

    // MathJax
    { src: '/reveal/plugin/math/math.js', async: true },
  ],
})

Reveal.addEventListener('slidechanged', (event) => {
  setTimeout(
    () => (window.location.hash = `/${event.indexh}/${event.indexv}`),
    0
  )
})

Reveal.addEventListener('ready', () => {
  const indexh =
    window.location.hash && window.location.hash.split('/')[0].replace('#', '')
  const indexv = window.location.hash && window.location.hash.split('/')[1]
  if (indexh && indexv) {
    Reveal.slide(indexh, indexv)
  }
})
