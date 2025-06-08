# 🎬 Movie App

A basic movie app built using **React**, **Tailwind CSS**, **React Router**, **Context API**, and a **fake movie API**. The app displays a list of movies on the homepage and shows detailed info on a separate single page.

---

## 🚀 Features

- 📃 Home page with a grid of movie cards
- 🎥 Single movie detail page using React Router
- 🌐 Global movie state using Context API
- 🖌️ Stylish UI with Tailwind CSS
- 🔄 Fetch movies from a fake movie API

---

## 🛠️ Tech Stack

- React
- Tailwind CSS
- React Router DOM
- Context API
- Fake REST API ([Sample APIs - Action Movies](https://api.sampleapis.com/movies/action))

---

## 📁 Folder Structure

```
movie-app/
├── public/
├── src/
│ ├── components/
│ │ ├── MovieCard.jsx
│ │ └── Navbar.jsx
│ ├── context/
│ │ └── MovieContext.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── MovieDetails.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── tailwind.config.js
├── package.json
```

### 🌍 API Used
This app fetches data from:
- http://www.omdbapi.com/?apikey=[yourkey]&

```bash
https://www.omdbapi.com/?apikey=[yourkey]&s=movie
```

## 🙌 Author
***Sandeep Kumar***