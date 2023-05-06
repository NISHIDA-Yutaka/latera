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
    return apiClient.get("/articleinfo", { params: { url } });
  },
};
