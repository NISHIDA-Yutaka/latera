(function(){"use strict";var t={6763:function(t,e,r){var n=r(9242),i=r(3396);const c={id:"app"};function l(t,e,r,n,l,o){const a=(0,i.up)("AddArticle"),s=(0,i.up)("ArticleList");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(a,{onArticleAdded:o.fetchArticles},null,8,["onArticleAdded"]),(0,i.Wm)(s,{ref:"articleList"},null,512)])}const o={class:"flex justify-center mt-10"},a=(0,i._)("button",{type:"submit",class:"bg-blue-500 text-white p-2 rounded ml-2"}," Add ",-1);function s(t,e,r,c,l,s){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("form",{onSubmit:e[1]||(e[1]=(0,n.iM)(((...t)=>s.addArticle&&s.addArticle(...t)),["prevent"])),class:"flex"},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.url=t),type:"text",placeholder:"Enter article URL",class:"border-2 border-gray-300 p-2 w-full rounded"},null,512),[[n.nr,l.url]]),a],32)])}var u=r(4161);const d=u.Z.create({baseURL:"http://localhost:3001",headers:{Accept:"application/json","Content-Type":"application/json"}});var f={saveArticle(t){return d.post("/articles",t)},getArticleInfo(t){return d.get("/articleinfo",{params:{url:t}})},getArticles(){return d.get("/articles")},deleteArticle(t){return d.delete(`/articles/${t}`)}},h={data(){return{url:""}},methods:{async addArticle(){try{const t=await f.getArticleInfo(this.url),e={title:t.data.title,url:this.url,content:t.data.content,thumbnail_url:t.data.imageUrl};await f.saveArticle(e),this.url="",this.$emit("article-added")}catch(t){console.error("Error fetching article info:",t)}}}},p=r(89);const m=(0,p.Z)(h,[["render",s]]);var g=m;const v={class:"article-list px-5 mt-10"},A={class:"grid grid-cols-1 md:grid-cols-2 gap-4"};function b(t,e,r,n,c,l){const o=(0,i.up)("ArticleCard");return(0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",A,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.articles,(t=>((0,i.wg)(),(0,i.j4)(o,{key:t.id,article:t,onDeleteArticle:l.deleteArticle},null,8,["article","onDeleteArticle"])))),128))])])}var y=r(7139);const w={class:"bg-white overflow-hidden shadow rounded-lg"},_=["href"],x=["src"],j={class:"p-4"},O={class:"text-lg font-semibold"},k={class:"mt-2 text-sm text-gray-600"},D={class:"mt-2 text-xs text-gray-400"},L={class:"flex justify-end"};function T(t,e,r,n,c,l){const o=(0,i.up)("TrashIcon");return(0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("a",{href:r.article.url,target:"_blank",class:"block"},[(0,i._)("img",{src:r.article.thumbnail_url,alt:"Article thumbnail",class:"w-full h-80 object-cover"},null,8,x),(0,i._)("div",j,[(0,i._)("h3",O,(0,y.zw)(r.article.title),1),(0,i._)("p",k,(0,y.zw)(r.article.summary),1),(0,i._)("p",D,(0,y.zw)(l.getDomain(r.article.url)),1)])],8,_),(0,i._)("div",L,[(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>l.deleteArticle&&l.deleteArticle(...t)),class:"text-red-500 p-1"},[(0,i.Wm)(o,{class:"h-6 w-6"})])])])}var C=r(4242),S={props:{article:{type:Object,required:!0}},components:{TrashIcon:C},methods:{getDomain(t){try{const e=new URL(t).hostname;return e}catch(e){return""}},deleteArticle(){this.$emit("delete-article",this.article.id)}}};const E=(0,p.Z)(S,[["render",T]]);var U=E,Z={components:{ArticleCard:U},data(){return{articles:[]}},async mounted(){this.fetchArticles()},methods:{async fetchArticles(){try{const t=await f.getArticles();this.articles=t.data}catch(t){console.error("Error fetching articles:",t)}},async deleteArticle(t){try{await f.deleteArticle(t),this.fetchArticles()}catch(e){console.error("Error deleting article:",e)}}}};const I=(0,p.Z)(Z,[["render",b]]);var M=I,P={components:{AddArticle:g,ArticleList:M},methods:{fetchArticles(){this.$refs.articleList.fetchArticles()}}};const $=(0,p.Z)(P,[["render",l]]);var z=$;(0,n.ri)(z).mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,c){if(!n){var l=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],c=t[u][2];for(var o=!0,a=0;a<n.length;a++)(!1&c||l>=c)&&Object.keys(r.O).every((function(t){return r.O[t](n[a])}))?n.splice(a--,1):(o=!1,c<l&&(l=c));if(o){t.splice(u--,1);var s=i();void 0!==s&&(e=s)}}return e}c=c||0;for(var u=t.length;u>0&&t[u-1][2]>c;u--)t[u]=t[u-1];t[u]=[n,i,c]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,c,l=n[0],o=n[1],a=n[2],s=0;if(l.some((function(e){return 0!==t[e]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(a)var u=a(r)}for(e&&e(n);s<l.length;s++)c=l[s],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(u)},n=self["webpackChunklatera"]=self["webpackChunklatera"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(6763)}));n=r.O(n)})();
//# sourceMappingURL=app.4c2c7963.js.map