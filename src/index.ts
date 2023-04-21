import express from "express"
import passport from "passport"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config()
import "./passport"

const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cookieParser())
// app.use(passport.initialize())

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Express!")
})

app.post(
  "/auth/openid/return",
  //   passport.authenticate("azuread-openidconnect", { failureRedirect: "/" }),
  (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
  }
)

app.get(
  "/login",
  passport.authenticate("azuread-openidconnect", { failureRedirect: "/" }),
  (req, res) => {
    res.status(200).send("Login route")
  }
)

app.get("/logout", function (req, res) {
  res.redirect(
    "https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http://localhost:3000"
  )
})

app.listen(3000, () => {
  console.log("Running on port 3000")
})
