import dotenv from 'dotenv';

dotenv.config();

let googleClientId: string, googleClientSecret: string, mongoURI: string, cookieKey: string;

googleClientId = process.env.GOOGLE_CLIENT_ID || '';
googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || '';
mongoURI = process.env.MONGO_URI || '';
cookieKey = process.env.COOKIE_KEY || '';
console.log('googleClientId::', googleClientId)
export {
  googleClientId,
  googleClientSecret,
  mongoURI,
  cookieKey,
};
