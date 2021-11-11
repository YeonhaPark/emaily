import express from "express";
import passport from "passport";
import mongoose from "mongoose";
import { authRoutes } from "./routes/authRoutes";
import { mongoURI, cookieKey } from "./config/keys";
import cookieSession from "cookie-session"; // give access to cookie
import "./models/User";
import "./services/passport"; // 항상 models/User뒤에!

mongoose.connect(mongoURI);
const app = express();
mongoose.connection.on("connected", () => {
  console.log("connected successfully");
});
app.get('/', function (req, res) {
  res.send('hello world')
})
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long this cookie could exist in browser
    keys: [cookieKey],
  })
);

// // tell passport to handle cookies and authentication
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.use("*", (req, res) => {
  res.send("<h1>Welcome to your simple server!!</h1>");
});

const PORT: string | number = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`hosting @${PORT}`));
