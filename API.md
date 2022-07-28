# API POINTS



## Users


### Menampilkan data users
```
GET: /users

response:
[
{
        "id": "1",
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Hello Selamat Datang di Website ku\r\nMahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta",
        "github_url": "https://github.com/ZidaneAlFareshy",
        "ig_url": "https://www.instagram.com/zidane_al_fareshy/",
        "fb_url": "https://www.facebook.com/Zidane124",
        "discord_url": "https://discord.gg/gYx4hT49"
},
{
  ...
}
]
```
### Menampilkan data user dengan ```id``` tertentu 
```
GET: /users/[id]

response:
{
        "id": "1",
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Hello Selamat Datang di Website ku\r\nMahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta",
        "github_url": "https://github.com/ZidaneAlFareshy",
        "ig_url": "https://www.instagram.com/zidane_al_fareshy/",
        "fb_url": "https://www.facebook.com/Zidane124",
        "discord_url": "https://discord.gg/gYx4hT49"
}
```
### Menambahkan data user
```
POST: /users

data:
{
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Hello Selamat Datang di Website ku\r\nMahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta",
        "github_url": "https://github.com/ZidaneAlFareshy",
        "ig_url": "https://www.instagram.com/zidane_al_fareshy/",
        "fb_url": "https://www.facebook.com/Zidane124",
        "discord_url": "https://discord.gg/gYx4hT49"
}

response:
true    //if true
false   //if false
```
### Mengubah data user
```
PUT: /about[id]

data:
{
        "nama": "Mohammad Jindan Dubbay",
        "deskripsi": "Hello Selamat Datang di Website ku\r\nMahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta",
        "github_url": "https://github.com/ZidaneAlFareshy",
        "ig_url": "https://www.instagram.com/zidane_al_fareshy/",
        "fb_url": "https://www.facebook.com/Zidane124",
        "discord_url": "https://discord.gg/gYx4hT49"
}
response:
true    //if true
false   //if false
```
### Menghapus data user
```
DELETE: /users/[id]

response:
true    //if true
false   //if false
```


## About


### Menampilkan data About
```
GET: /about

response:
[
{
        "id": "1",
        "gambar": "http://zidane.bungsu.my.id/img/Jindan.jpg",
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Mahasiswa\r\n\r\nPerkenalkan nama saya Mohammad Jindan Dubbay Al Faresh biasa dipanggil Jindan, lahir di Indramayu, Jawa Barat. Hobi saya membaca buku dan membuat sesuatu yang menurut saya itu menarik. Saya mahasiswa Universitas Ahmad Dahlan prodi Sistem Informasi, jika ingin lebih mengenalku bisa contact saja sesuai media sosial yang tercantum hihi"
},
{
  ...
}
]
```
### Menampilkan data about dengan ```id``` tertentu 
```
GET: /about/[id]

response:
{
        "id": "1",
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Hello Selamat Datang di Website ku\r\nMahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta",
        "github_url": "https://github.com/ZidaneAlFareshy",
        "ig_url": "https://www.instagram.com/zidane_al_fareshy/",
        "fb_url": "https://www.facebook.com/Zidane124",
        "discord_url": "https://discord.gg/gYx4hT49"
}
```
### Menambahkan data about
```
POST: /about

data:
{
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Hello Selamat Datang di Website ku\r\nMahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta",
        "github_url": "https://github.com/ZidaneAlFareshy",
        "ig_url": "https://www.instagram.com/zidane_al_fareshy/",
        "fb_url": "https://www.facebook.com/Zidane124",
        "discord_url": "https://discord.gg/gYx4hT49"
}

response:
true    //if true
false   //if false
```
### Mengubah data about
```
PUT: /about[id]

data:
{
        "nama": "Mohammad Jindan Dubbay",
        "deskripsi": "Hello Selamat Datang di Website ku\r\nMahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta",
        "github_url": "https://github.com/ZidaneAlFareshy",
        "ig_url": "https://www.instagram.com/zidane_al_fareshy/",
        "fb_url": "https://www.facebook.com/Zidane124",
        "discord_url": "https://discord.gg/gYx4hT49"
}
response:
true    //if true
false   //if false
```
### Menghapus data about
```
DELETE: /about/[id]

response:
true    //if true
false   //if false
```


## ARTICLES
### Menampilkan articles
```
GET: /articles

response:
[
{
"id": "1",
"gambar": "http://zidane.bungsu.my.id/img/anakusiadini.jpeg",
"deskripsi": "menekuni"
},
{
"id": "2",
"gambar": "http://zidane.bungsu.my.id/img/temandengar.jpeg",
"deskripsi": "Teman Dengar adalah salah satu komunitas kesehatran mental yang saya ikuti"
},
{
"id": "3",
"gambar": "http://zidane.bungsu.my.id/img/analisis.jpeg",
"deskripsi": "Melakukan observasi tentang sebuah bisnis di salah satu Restoran di Yogyakarta"
},
{
"id": "5",
"gambar": "http://zidane.bungsu.my.id/img/anakusiadini.jpeg",
"deskripsi": "menekuni dalam bidang pendidikan anak usia dini"
},
{
"id": "6",
"gambar": "http://zidane.bungsu.my.id/img/anakusiadini.jpeg",
"deskripsi": "menekuni dalam bidang pendidikan anak usia dini"
},
{
"id": "7",
"gambar": "http://zidane.bungsu.my.id/img/anakusiadini.jpeg",
"deskripsi": "menekuni dalam bidang pendidikan anak usia dini"
}
]
```
### Menampilkan article berdasarkan ```id```
```
GET: /articles/[id]

response:
{
"id": "1",
"gambar": "http://zidane.bungsu.my.id/img/anakusiadini.jpeg",
"deskripsi": "menekuni"
}
```
### Menambahkan article
```
POST: /articles

data:
{
"gambar": "http://zidane.bungsu.my.id/img/anakusiadini.jpeg",
"deskripsi": "menekuni dalam bidang pendidikan anak usia dini"
}

response:
true    //if true
false   //if false
```
### Mengubah article
```
PUT: /articles

data:
{
"gambar": "http://zidane.bungsu.my.id/img/anakusiadini.jpeg",
"deskripsi": "menekuni"
}

response:
true    //if true
false   //if false
```
### Menghapus article
```
DELETE: /articles

response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/ZidaneAlFareshy/Tekweb2022/main/img/jindan.jpeg)