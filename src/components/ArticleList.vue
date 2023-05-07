<template>
  <div class="article-list px-5 mt-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
        @delete-article="deleteArticle"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";
import ApiService from "../services/ApiService";

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      articles: [],
    };
  },
  async mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await ApiService.getArticles();
        this.articles = response.data;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    async deleteArticle(id) {
      try {
        await ApiService.deleteArticle(id);
        this.fetchArticles();
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    },
  },
};
</script>

<style scoped>
</style>
