const path = require("path");
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "AlgoAce - LeetCode Solutions",
    message: "Welcome to AlgoAce!",
  });
});

// Generic route for any EJS file in views
app.get("/:page", (req, res, next) => {
  const page = req.params.page;
  if (page === "home") {
    return res.redirect("/");
  }
  const viewPath = path.join(__dirname, "views", `${page}.ejs`);
  if (fs.existsSync(viewPath)) {
    res.render(page, { title: `LeetCode ${page}` });
  } else {
    next();
  }
});

// Fallback 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Not Found" });
});

// ✅ Start server
const port = process.env.PORT || 3974; // Render gives you a dynamic PORT
app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server running on http://0.0.0.0:${port}`);
});
