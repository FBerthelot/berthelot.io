module.exports = {
  stories: ['../components/**/*.story.js'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
  ],
}
