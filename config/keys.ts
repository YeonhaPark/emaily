import dotenv from 'dotenv';

if (process.env.NODE_ENV !== "production") dotenv.config();

let googleClientId: string, googleClientSecret: string, mongoURI: string, cookieKey: string;

googleClientId = process.env.GOOGLE_CLIENT_ID || '';
googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || '';
mongoURI = process.env.MONGO_URI || '';
cookieKey = process.env.COOKIE_KEY || '';

export {
  googleClientId,
  googleClientSecret,
  mongoURI,
  cookieKey,
};
