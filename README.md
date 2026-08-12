# 🛒 ShopHub

A React e-commerce practice app with product browsing, category filtering, sorting, a persistent shopping cart, and token-based authentication.

**Live demo:** [shopping-app-zgm1-chi.vercel.app](https://shopping-app-zgm1-chi.vercel.app/)

---

## Features

- 🔐 **Authentication** — login via the ReqRes API, with a protected-route system so shop pages require a valid session
- 🛍️ **Product catalog** — live product data from the FakeStoreAPI
- 🗂️ **Category filtering** — browse Electronics, Jewelery, Men's Clothing, Women's Clothing
- ↕️ **Sorting** — view products sorted by price
- 🛒 **Shopping cart** — add, remove, and adjust quantities, powered by React Context so it's shared across every page
- 🚪 **Logout** — clears the session and cart, redirects back to login
- 📱 **Responsive layout** — sticky header/footer, adapts down to mobile

## Tech stack

- React (Create React App)
- React Router
- React Context API (`CartContext`, `AuthContext`)
- Axios / Fetch
- [FakeStoreAPI](https://fakestoreapi.com/) — product data
- [ReqRes](https://reqres.in/) — login/authentication
- Deployed on [Vercel](https://vercel.com/)

## Demo login

This app authenticates against ReqRes's test endpoint. Use:

```
Email:    eve.holt@reqres.in
Password: cityslicka
```

## Getting started

```bash
git clone <your-repo-url>
cd shophub
npm install
npm start
```

The app runs at `http://localhost:3000`.

### Environment notes

The ReqRes API now requires a free `x-api-key` header on every request. Sign up at [app.reqres.in/api-keys](https://app.reqres.in/api-keys) to get one, then set it in `src/components/Login.js`:

```javascript
const API_KEY = "YOUR_REQRES_API_KEY";
```

## Deployment

This project auto-deploys to Vercel on every push to `main` via the GitHub integration — no manual deploy step needed. Preview deployments are generated automatically for other branches and pull requests.

## Project structure

```
src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Home.js
│   ├── Login.js
│   ├── Category.js
│   ├── Filter.js
│   ├── Sort.js
│   ├── Product.js
│   ├── Product_Info.js
│   ├── Cart.js
│   └── ProtectedRoute.js
├── context/
│   ├── CartContext.js
│   └── AuthContext.js
└── style/
    └── App.css
```

---

Built as a React practice project — routing, Context API state management, protected routes, and third-party API integration.