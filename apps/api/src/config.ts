import { config } from 'dotenv';
import { resolve } from 'path';
import 'dotenv/config'

const envFile = process.env.NODE_ENV === 'development' ? '.env.development' : '.env';

// Load environment variables from the correct .env file
config({ path: resolve(__dirname, `../${envFile}`) });

console.log(`Loaded environment variables from ${envFile}`);  // Debugging line

// Load all environment variables from .env file
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 8000;
export const DATABASE_URL = process.env.DATABASE_URL || '';
export const API_URL = process.env.API_URL || '';
export const EMAIL = process.env.EMAIL_ADDRESS || '';
export const PASS = process.env.PASS || '';
export const PRIVATE_KEY = process.env.PRIVATE_KEY || 'defaultPrivateKey';


