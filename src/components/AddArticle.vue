<template>
  <div class="flex justify-center mt-10">
    <form @submit.prevent="addArticle" class="flex">
      <input v-model="url" type="text" placeholder="Enter article URL" class="border-2 border-gray-300 p-2 w-full rounded" />
      <button type="submit" class="bg-blue-500 text-white p-2 rounded ml-2">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";

export default {
  data() {
    return {
      url: "",
    };
  },
  methods: {
    async addArticle() {
      try {
        const response = await ApiService.getArticleInfo(this.url);
        const articleInfo = {
          title: response.data.title,
          url: this.url,
          content: response.data.content,
          thumbnail_url: response.data.imageUrl,
        };
        await ApiService.saveArticle(articleInfo);
        this.url = "";
        this.$emit("article-added"); // イベントを親コンポーネントに送信
      } catch (error) {
        console.error("Error fetching article info:", error);
      }
    },
  },
};
</script>
