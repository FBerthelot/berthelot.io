<i18n>
{
  "fr": {
    "Love you Miss Quinn ♥": "Love you Miss Quinn ♥"
  },
  "en": {
    "Love you Miss Quinn ♥": "Love you Miss Quinn ♥"
  }
}
</i18n>

<template>
  <svg viewBox="0 0 160 32">
    <path id="path" d="m0,28 h152">
      <animate
        attributeName="d"
        from="m0,28 h0"
        to="m0,28 h152"
        dur="3s"
        begin="0s"
        repeatCount="1"
      />
    </path>
    <text font-size="16" y="-10" x="0" fill="white">
      <textPath xlink:href="#path">
        {{ $t('Love you Miss Quinn &hearts;') }}
      </textPath>
    </text>
  </svg>
</template>

<style scoped></style>
