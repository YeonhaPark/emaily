import passport from "passport";

const authRoutes = (app: any) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  ); // /auth/google로 접속했을 때 authenticate 할 것.

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req: any, res: any) => {
    req.logout();
    res.send(req.user); // they are no longer signed in.
  });
  app.get("/api/current_user", (req: any, res: any) => {
    res.send(req.user);
  });
};

export { authRoutes };
