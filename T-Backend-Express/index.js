const express = require("express");
const app = express();
const morgan = require("morgan");
// // // Example route for the home page
// // app.get("/", (req, res) => {
// //   res.send("Hello World"); // Fixed typo in the message
// // });

// // // Serve an HTML file from the static directory
// // app.get("/miarchivo", (req, res) => {
// //   res.sendFile("./static/index.html", {
// //     root: __dirname, // Ensures the file path is correct
// //   });
// // });

// // // Example JSON endpoint
// // app.get("/user", (req, res) => {
// //   res.json({
// //     name: "francisco",
// //     lastname: "bravo",
// //     age: 40,
// //     point: [1, 2, 3],
// //     address: {
// //       city: "new york",
// //       street: "some street 123",
// //     },
// //   }); // JSON will work as expected if you navigate to /user
// // });

// // // Example route for products (you can enable these by removing comments)
// // app.get("/products", (req, res) => {
// //   res.send("Hello from the GET Products method");
// // });

// // app.post("/products", (req, res) => {
// //   res.send("Create POST Products");
// // });

// // app.put("/products", (req, res) => {
// //   res.send("Create PUT Products");
// // });

// // app.delete("/products", (req, res) => {
// //   res.send("Delete POST Products");
// // });

// // // Catch-all 404 route if no other routes match
// // app.use((req, res) => {
// //   res.status(404).send("No se encontro tu pagina");
// // });

// //clase 02 enviar HTML A EXPRES
// app.use(express.text());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post("/user", (req, res) => {
//   console.log(req.body);

//   res.send("nuevo usuarios creado");
// });

// /**
//  * Queries
//  */
// app.get("/search", (req, res) => {
//   if (req.query.q === "javascript books") {
//     res.send("lista de libros de javascript");
//   } else {
//     res.send("pagina normal");
//   }
// });

// app.get("/hello/:username", (req, res) => {
//   console.log(req.query.user);
//   res.send(`Hello ${req.params.username.toUpperCase()}`);
// });

// /**
//  * Metodo All
//  */
// app.all("/info", (req, res) => {
//   res.send("server info");
// });

/**Midddleware */
// app.use((req, res, next) => {
//   console.log("paso por aqui");
//   next();
// });

// app.use((req, res, next) => {
//   if (req.query.login === "fb") {
//     next();
//   } else {
//     res.send("no autorizado");
//   }
// });

app.use(morgan('dev'));

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

// Starting the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
