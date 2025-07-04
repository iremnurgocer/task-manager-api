# 🗂️ Task Manager API

Bu proje, kullanıcıların JWT ile kimlik doğrulaması yaparak görev (task) yönetimi gerçekleştirebileceği bir RESTful API uygulamasıdır. Amaç, backend geliştirici mülakatlarında öne çıkacak düzeyde bir yapıyı kısa sürede ortaya koymak ve TypeScript, Express, Sequelize gibi modern teknolojilerle çalışabilme yetkinliğini göstermektir.

---

## 🚀 Kullanılan Teknolojiler

- **Node.js** + **Express**
- **TypeScript**
- **Sequelize ORM** (SQLite veritabanı ile)
- **JWT (jsonwebtoken)** ile kimlik doğrulama
- **dotenv** ile konfigürasyon yönetimi
- **bcrypt** ile şifre güvenliği
- **Postman** ile API testleri
- (Opsiyonel) **Docker**

---

## 📁 Proje Yapısı

task-manager-api/
├── src/
│ ├── config/ → Veritabanı bağlantı dosyası
│ ├── controllers/ → HTTP taleplerini yönetir
│ ├── middleware/ → Auth kontrolleri
│ ├── models/ → Sequelize veri modelleri
│ ├── routes/ → API route dosyaları
│ ├── services/ → İş mantığı (business logic)
│ ├── utils/ → Yardımcı fonksiyonlar
│ └── app.ts → Express app giriş dosyası
├── .env → Ortam değişkenleri
├── package.json → Bağımlılıklar
├── tsconfig.json → TypeScript ayarları
├── task-manager.sqlite → Veritabanı
└── README.md → Bu dosya

## 🧰 Kullanılan Teknolojiler

- **Node.js** & **Express.js**
- **TypeScript**
- **SQLite** & **Sequelize**
- **JWT** (jsonwebtoken)
- **dotenv**
- **bcrypt** (şifreleme için)

---

## 🔐 API Endpoint’leri

### ✅ Auth Rotaları

| Method | URL              | Açıklama             |
|--------|------------------|----------------------|
| POST   | `/auth/register` | Yeni kullanıcı ekler |
| POST   | `/auth/login`    | Giriş ve token alma  |

### 📝 Task Rotaları

> JWT Token zorunludur.

| Method | URL         | Açıklama              |
|--------|-------------|------------------------|
| GET    | `/tasks`    | Tüm görevleri getirir  |
| POST   | `/tasks`    | Yeni görev ekler       |
| PUT    | `/tasks/:id`| ID'ye göre günceller   |
| DELETE | `/tasks/:id`| ID'ye göre siler       |

---

## ⚙️ Projeyi Çalıştırmak

### 1. Projeyi Klonla

``bash
git clone https://github.com/kullaniciadi/task-manager-api.git
cd task-manager-api
2. Bağımlılıkları Kur
bash
Kopyala
Düzenle
npm install
3. Ortam Değişkenlerini Tanımla
.env dosyası oluştur ve içerisine:

ini
Kopyala
Düzenle
JWT_SECRET=seninsecreting
4. Uygulamayı Başlat
bash
Kopyala
Düzenle
npx ts-node src/app.ts
veya

bash
Kopyala
Düzenle
npm run dev
(Eğer ts-node-dev kuruluysa)

🔭 Postman ile Test
/auth/login üzerinden token al.

Diğer tüm /tasks rotalarını test etmek için Authorization > Bearer Token alanına JWT token’ı ekle.

🐳 Docker (Opsiyonel)
Dockerfile
Kopyala
Düzenle
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npx", "ts-node", "src/app.ts"]
👤 Geliştirici
İrem Nur Göçer
📫 iremnur.gocer@keyyazilim.com
🧑‍💻 github.com/iremnurgocer
