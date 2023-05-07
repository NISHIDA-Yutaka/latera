<template>
  <div id="app">
    <AddArticle @article-added="fetchArticles" />
    <ArticleList ref="articleList" />
  </div>
</template>

<script>
import AddArticle from "./components/AddArticle.vue";
import ArticleList from "./components/ArticleList.vue";

export default {
  components: {
    AddArticle,
    ArticleList,
  },
  methods: {
    fetchArticles() {
      this.$refs.articleList.fetchArticles();
    },
  },
};
</script>
