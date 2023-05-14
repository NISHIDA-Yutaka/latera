<template>
  <div class="flex flex-col bg-white overflow-hidden shadow-lg rounded-lg h-full">
    <a :href="article.url" target="_blank" class="flex flex-col flex-grow">
      <img :src="article.thumbnail_url" alt="Article thumbnail" class="w-full h-80 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ article.title }}</h3>
        <p class="mt-2 text-sm text-gray-600 summary" v-html="article.content"></p>
        <p class="mt-2 text-xs text-gray-400">{{ getDomain(article.url) }}</p>
      </div>
    </a>
    <div class="flex justify-end m-2">
      <button @click="archiveArticle" class="text-gray-500 p-1 mr-2">
        <ArchiveBoxArrowDownIcon class="h-6 w-6" />
      </button>
      <button @click="refreshSummary" class="text-green-500 p-1 mr-6">
        <ArrowPathIcon class="h-6 w-6" />
      </button>
      <button @click="deleteArticle" class="text-red-500 p-1">
        <TrashIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
</template>

<script>
import { TrashIcon, ArchiveBoxArrowDownIcon, ArrowPathIcon } from '@heroicons/vue/24/outline';

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {
    TrashIcon,
    ArchiveBoxArrowDownIcon,
    ArrowPathIcon,
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
    archiveArticle() {
      this.$emit("archive-article", this.article.id);
    },
    refreshSummary() {
      this.$emit("refresh-summary", this.article.id);
    },
  },
};
</script>

<style scoped>
.summary >>> ul {
  list-style-type: disc;
  /* ディスク形式の箇条書きマーカー */
  padding-left: 2em;
  /* リストの左側のパディング */
}

.summary >>> li {
  margin-bottom: 0.5em;
  /* リストアイテム間のマージン */
  line-height: 1.5;
  /* 行間 */
}

/* ネストされたリストのスタイル */
.summary >>> ul ul {
  list-style-type: circle;
  /* 円形の箇条書きマーカー */
}

.summary >>> ul ul ul {
  list-style-type: square;
  /* 四角形の箇条書きマーカー */
}
</style>
