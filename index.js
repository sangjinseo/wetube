import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listeing on: http://localhost:${PORT}`);

const handleProfile = (req, res) => res.send("You are on my profile");

const handleHome = (req, res) => res.send("Hello from my Home");

const handleAboutUs = (req, res) => res.send("About US");

const handleContact = (req, res) => res.send("contact");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

const middleware = (req, res, next) => {
  res.send("I'm a middleware ");
};

app.get("/", middleware, handleHome);
app.get("/about_us", handleAboutUs);
app.get("/profile", handleProfile);
app.get("/contact", handleContact);
app.get("/protected", handleHome);

app.listen(PORT, handleListening);
