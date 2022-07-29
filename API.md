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
"gambar": "http://jindan12.bungsu.my.id/img/Jindan.jpg",
"nama": "Mohammad Jindan Dubbay Al Faresh",
"deskripsi": "Mahasiswa\r\n\r\nPerkenalkan nama saya Mohammad Jindan Dubbay Al Faresh biasa dipanggil Jindan, lahir di Indramayu, Jawa Barat. Hobi saya membaca buku dan membuat sesuatu yang menurut saya itu menarik. Saya mahasiswa Universitas Ahmad Dahlan prodi Sistem Informasi, jika ingin lebih mengenalku bisa contact saja sesuai media sosial yang tercantum hihi"
}
]
```
### Menampilkan data about dengan ```id``` tertentu 
```
GET: /about/[id]

response:
{
        "id": "1",
        "gambar": "http://jindan12.bungsu.my.id/img/Jindan.jpg",
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Mahasiswa\r\n\r\nPerkenalkan nama saya Mohammad Jindan Dubbay Al Faresh biasa dipanggil Jindan, lahir di Indramayu, Jawa Barat. Hobi saya membaca         buku dan membuat sesuatu yang menurut saya itu menarik. Saya mahasiswa Universitas Ahmad Dahlan prodi Sistem Informasi, jika ingin lebih mengenalku bisa               contact saja sesuai media sosial yang tercantum hihi"
}
```
### Menambahkan data about
```
POST: /about

data:
{
        "gambar": "http://jindan12.bungsu.my.id/img/Jindan.jpg",
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Mahasiswa\r\n\r\nPerkenalkan nama saya Mohammad Jindan Dubbay Al Faresh biasa dipanggil Jindan, lahir di Indramayu, Jawa Barat. Hobi saya membaca         buku dan membuat sesuatu yang menurut saya itu menarik. Saya mahasiswa Universitas Ahmad Dahlan prodi Sistem Informasi, jika ingin lebih mengenalku bisa               contact saja sesuai media sosial yang tercantum hihi"
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
        "gambar": "http://jindan12.bungsu.my.id/img/Jindan.jpg",
        "nama": "Mohammad Jindan Dubbay Al Faresh",
        "deskripsi": "Mahasiswa\r\n\r\nPerkenalkan nama saya Mohammad Jindan Dubbay Al Faresh biasa dipanggil Jindan, lahir di Indramayu, Jawa Barat. Hobi saya membaca         buku dan membuat sesuatu yang menurut saya itu menarik. Saya mahasiswa Universitas Ahmad Dahlan prodi Sistem Informasi, jika ingin lebih mengenalku bisa               contact saja sesuai media sosial yang tercantum hihi"
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
"gambar": "https://jindan12.bungsu.my.id/img/pendidikan.jpg",
"deskripsi": "Pendidikan yang harus ditekuni"
},
{
"id": "2",
"gambar": "https://jindan12.bungsu.my.id/img/teman.jpg",
"deskripsi": "Teman yang baik"
},
{
"id": "3",
"gambar": "http://jindan12.bungsu.my.id/img/12.jpg",
"deskripsi": "Penelitian Kemasyarakatan sebagai Salah Satu Alat dalam Merevitalisasi Pemasyarakatan"
}
]
```
### Menampilkan article berdasarkan ```id```
```
GET: /articles/[id]

response:
{
"id": "1",
"gambar": "https://jindan12.bungsu.my.id/img/pendidikan.jpg",
"deskripsi": "Pendidikan yang harus ditekuni"
}
```
### Menambahkan article
```
POST: /articles

data:
{
"gambar": "https://jindan12.bungsu.my.id/img/pendidikan.jpg",
"deskripsi": "Pendidikan yang harus ditekuni"
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
"gambar": "https://jindan12.bungsu.my.id/img/pendidikan.jpg",
"deskripsi": "Pendidikan yang harus ditekuni dan dijalankan"
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
![Design Database](https://github.com/ZidaneAlFareshy/Tekweb2022/blob/main/img/GambarApi.png)
