<template>
  <div class="article-list px-5 mt-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
        @delete-article="deleteArticle"
        @archive-article="archiveArticle"
        @refresh-summary="refreshSummary"
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
    this.timer = setInterval(this.fetchArticles, 10000); // every 5 seconds
  },
  beforeUnmount() {
    clearInterval(this.timer); // clear timer on component destroy
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
    async archiveArticle(id) {
      try {
        await ApiService.archiveArticle(id);
        // Update the fetchArticles call to only fetch unarchived articles
        const response = await ApiService.getArticles();
        this.articles = response.data;
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    },
    async refreshSummary(id) {
      try {
        // Update the content of the article in the frontend
        const article = this.articles.find((article) => article.id === id);
        if (article) {
          article.content = 'Summarizing content...';
        }
        await ApiService.refreshSummary(id);
        this.fetchArticles();
      } catch (error) {
        console.error("Error refreshing summary:", error);
      }
    },
  },
};
</script>

<style scoped>
</style>
