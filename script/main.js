Vue.createApp({
    data() {
        return {
            tentangAku : {
                "nama": "Khalda Hafizhah Arina Wafa",
                "posisi": "Mahasiswa",
                "story": "Hay Fweenn, kenalin aku khalda. panggil aja khal atau da, maybe. aku mahasiswa semester 4 universitas ahmad dahlan prodi sisitem informasi.kalo kalian mau kenal aku lebih jauh bisa tap di instagram juga email aku yaa. salam kenal semuanya!",
                "image": "./img/IMG_2415.JPG"
            },
            articles: [],
            article: null,
        };
    },
    methods: {
        getArticles() {
            axios
                .get(
                    "https://my-json-server.typicode.com/ZidaneAlFareshy/Tekweb2022/article"
                )
                .then((res) => {
                    this.articles = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const articles = urlParams.get('article');
            var converter = new showdown.Converter();
            console.log(articles);
            axios
                .get(
                    src = "https://raw.githubusercontent.com/ZidaneAlFareshy/Tekweb2022/main/article/" + articles
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.article = html;
                    console.log(html);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },

    beforeMount() {
            this.getArticles(),
            this.getMarkdown()
    }
}).mount("#app");
