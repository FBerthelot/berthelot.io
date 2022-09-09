<template>
  <Typography class="card__meta" :component="component" variant="meta-info">
    <slot></slot>
  </Typography>
</template>

<script>
import { Typography } from '../../typography'
export default {
  components: {
    Typography,
  },
  props: {
    component: {
      type: String,
      required: false,
      default: 'div',
    },
  },
}
</script>

<style scoped>
.card__meta {
  text-align: right;
}
</style>
