import reactRefactoring from './react-test-refactoring-snapshot.md'

export default [
  {
    name: 'React refactoring: Kills of the legacy with snapshot testing',
    slug: 'react-test-refactoring-snapshot',
    content: reactRefactoring,
    date: new Date('2020-06-04'),
    description: `
      You want to refactor a big React codebase but you're not sure you won't break anything?
      The first part of my guide will guide you through this!
    `,
  },
].map((s) => ({ ...s, type: 'article' }))
