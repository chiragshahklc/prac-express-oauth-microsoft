import passport from "passport"
import { OIDCStrategy, IProfile, VerifyCallback } from "passport-azure-ad"
import config from "./config"

passport.use(
  new OIDCStrategy(
    config,
    (
      iss: string,
      sub: string,
      profile: IProfile,
      accessToken: string,
      refreshToken: string,
      done: VerifyCallback
    ) => {
      console.log({
        iss,
        sub,
        profile,
        accessToken,
        refreshToken,
      })

      return done(null)
    }
  )
)
