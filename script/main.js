Vue.createApp({
    data() {
        return {
            tentangAku : {
                "nama": "Mohammad Jindan Dubbay Al Faresh",
                "posisi": "Mahasiswa",
                "story": "Perkenalkan nama saya Mohammad Jindan Dubbay Al Faresh biasa dipanggil Jindan, lahir di Indramayu, Jawa Barat. Hobi saya membaca buku dan membuat sesuatu yang menurut saya itu menarik. Saya mahasiswa Universitas Ahmad Dahlan prodi Sistem Informasi, jika ingin lebih mengenalku bisa contact saja sesuai media sosial yang tercantum hihi",
                "image": "./img/Jindan.jpg"
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
