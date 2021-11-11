import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import mongoose from "mongoose";
import { googleClientId, googleClientSecret } from "../config/keys";

type UserType = { id: string; googleId?: string };

const User = mongoose.model("users");

// 해당하는 유저를 찾았을때 해당 유저의 정보가 밑의 user 아규먼트로 넘어옴.
passport.serializeUser((user: UserType, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
      console.log({accessToken, refreshToken, profile, done})
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          // make a new record
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
