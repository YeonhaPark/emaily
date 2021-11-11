import dotenv from 'dotenv';

dotenv.config();

let googleClientId: string, googleClientSecret: string, mongoURI: string | undefined, cookieKey: string | undefined;

googleClientId = process.env.GOOGLE_CLIENT_ID || '';
googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || '';
mongoURI = process.env.MONGO_URI;
cookieKey = process.env.COOKIE_KEY;

export {
  googleClientId,
  googleClientSecret,
  mongoURI,
  cookieKey,
};
