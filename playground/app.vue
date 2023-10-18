<template>
  <div>Nuxt module playground!</div>
</template>

<script lang="ts" setup>
import { useHttp } from '#imports'

console.log(useHttp().get('/user'))
</script>
