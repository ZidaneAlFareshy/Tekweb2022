Vue.createApp({
    data() {
      return {
        artikel: [],
        judul:"Artikel",
        article:"a"
      };
    },
    methods: {
      getArtikel() {
        axios
          .get(
            src="https://github.com/ZidaneAlFareshy/Tekweb2022/blob/main/js/article.json")
          .then((res) => {
            console.log(res.data);
            this.artikel = res.data; 
          })
          .catch((error) => {
            console.log(error);
          });
      },
      ambiljudul(){
        const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const article = urlParams.get('article');        
          var converter = new showdown.Converter();
          axios
            .get(
              src="../article/"+article
            )
            .then((res) => {           
              var html = converter.makeHtml(res.data);           
              this.article = html;
            })
            .catch((error) => {
              console.log(error);
            });
      }
    },
    beforeMount() {
      this.getArtikel();
      this.ambiljudul();
    },
  }).mount("#app");
