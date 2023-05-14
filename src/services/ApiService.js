import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // 既存のAPIメソッドがあればここに追加
  saveArticle(article) {
    return apiClient.post("/articles", article);
  },
  getArticleInfo(url) {
    return apiClient.get("/articleinfo", { params: { url: url } });
  },
  getArticles() {
    return apiClient.get("/articles");
  },
  deleteArticle(id) {
    return apiClient.delete(`/articles/${id}`);
  },
  archiveArticle(id) {
    return apiClient.post(`/articles/${id}/archive`); // Use POST for archive action
  },
  refreshSummary(id) {
    return apiClient.patch(`/articles/${id}/refresh-summary`);
  },
};
