<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta hid="description" name="description" content="" />
      <Meta name="format-detection" content="telephone=no" />

      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <Link href="https://fonts.googleapis.com" rel="preconnect" />
      <Link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
      <Link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

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
    <Body>
      <div id="wedding">
        <slot></slot>
      </div>
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
  ogImage: '/assets/mariage/agnes_et_florent-violet-400x.png',
  twitterImage: '/assets/mariage/agnes_et_florent-violet-400x.png',
})
</script>

<style>
@import url('~/components/mariage/00_design-system/index.css');

#wedding {
  height: 100%;
  width: 100%;
}
</style>
