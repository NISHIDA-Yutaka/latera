<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <a :href="article.url" target="_blank" class="block">
      <img :src="article.thumbnail_url" alt="Article thumbnail" class="w-full h-80 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ article.title }}</h3>
        <p class="mt-2 text-sm text-gray-600">{{ article.content }}</p>
        <p class="mt-2 text-xs text-gray-400">{{ getDomain(article.url) }}</p>
      </div>
    </a>
    <div class="flex justify-end">
        <button @click="deleteArticle" class="text-red-500 p-1">
        <TrashIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
</template>

<script>
import { TrashIcon } from '@heroicons/vue/24/outline';

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {
    TrashIcon,
  },
  methods: {
    getDomain(url) {
      try {
        const domain = new URL(url).hostname;
        return domain;
      } catch (error) {
        return "";
      }
    },
    deleteArticle() {
      this.$emit("delete-article", this.article.id);
    },
  },
};
</script>

<style scoped>
</style>
