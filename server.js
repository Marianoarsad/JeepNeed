import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("home.ejs")
});

app.get("/app", (req, res) => {
    res.render("app.ejs");
});

app.listen( port, () => {
    console.log(`Server running on port ${port}`);
});