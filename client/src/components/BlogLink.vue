<template>
  <RouterLink :to="`/blog/${id}`" class="hover:bg-midnightGreen flex flex-col transition duration-250">
    <p class="text-2xl">{{ title }}</p>
    <p class="text-gray-400">{{ description }}...</p>
  </RouterLink>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'BlogLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
a {
  text-decoration: underline;
}
</style>
