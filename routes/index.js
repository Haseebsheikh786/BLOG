
 
const { isAuth } = require("../services/common");
  

// // Auth
// router
//   .post("/auth/signup", createUser)
//   .post("/auth/login", passport.authenticate("local"), loginUser)
//   .get("/auth/logout", logout)
//   .get("/auth/check", isAuth(), checkAuth);

// // User
// router.get("/users/own", isAuth(), fetchUserById);

// Blog
// router
//   .get("/blog", getAllBlogs)
//   .post("/blog", isAuth(), createBlog)
//   .get("/blog/:id", isAuth(), getBlogByID)
//   .put("/blog", isAuth(), updateBlog)
//   .delete("/blog/:id", isAuth(), deleteBlog);
 
// Comment
// router.post("/comment", createComment).get("/comment/:id", getAllComment);


// {
//   "builds": [
//     {
//       "src": "index.js",
//       "use": "@vercel/node"
//     },
//     {
//       "src": "build/**",
//       "use": "@vercel/static"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/auth",
//       "dest": "index.js"
//     },
//     {
//       "src": "/auth/(.*)",
//       "dest": "index.js"
//     },
//     {
//       "src": "/users/own",
//       "dest": "index.js"
//     },
//     {
//       "src": "/users/own/(.*)",
//       "dest": "index.js"
//     },
//     {
//       "src": "/blog",
//       "dest": "index.js"
//     },
//     {
//       "src": "/blog/(.*)",
//       "dest": "index.js"
//     },
//     {
//       "src": "/",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/blog/:id",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/login",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/signup",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/submit",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/blog-update/:id",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/signOut",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/(.+)",
//       "dest": "build/$1"
//     }
//   ]
// }
