import passport from 'passport';

const authRoutes = (app: any) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  ); // /auth/google로 접속했을 때 authenticate 할 것.

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req: any, res: { redirect: (arg0: string) => void; }) => {
       res.redirect('/surveys')
    }
  );

  app.get('/api/logout', (req: any, res: any) => {
    req.logout();
    res.redirect('/'); // they are no longer signed in.
  });
  app.get('/api/current_user', (req: any, res: any) => {
    res.send(req.user);
  });
};

export { authRoutes };
