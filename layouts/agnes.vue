<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta hid="description" name="description" content="" />
      <Meta name="format-detection" content="telephone=no" />

      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body id="layout_default">
      <slot></slot>
    </Body>
  </Html>
</template>

<script setup lang="js">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

useSeoMeta({
  ogImage: '/assets/florent/avatar.jpg',
  twitterImage: '/assets/florent/avatar.jpg',
})
</script>

<style>
@import url('~/components/berthelot-system/index.css');

html {
  font-size: 16px;
}

#layout_default {
  background-color: var(--color-black);
  color: var(--color-white);
}
</style>
