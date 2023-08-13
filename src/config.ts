export const AWS_REGION = process.env.AWS_REGION || '';

export const AWS_ACCESS_ID = process.env.AWS_ACCESS_ID || '';
export const AWS_SECRET = process.env.AWS_SECRET || '';
export const JWT_SECRET = process.env.JWT_SECRET || '';
const ALLOWED_ADMIN_EMAILS_STR = process.env.ALLOWED_ADMIN_EMAILS || '';

export const ALLOWED_ADMIN_EMAILS = new Set(
  ALLOWED_ADMIN_EMAILS_STR.split(',')
);
export const PORT = process.env.PORT || 5142;

const FEATURE_TOGGLE_ENV = process.env.FEATURE_TOGGLE || '';

export const FEATURE_TOGGLE = new Set(
  FEATURE_TOGGLE_ENV.toLowerCase()
    .split(',')
    .map((text) => text.trim())
);

export const NEWS_FILE_ENV = process.env.NEWS_FILE || 'news.json';

export const EVENTS_FILE_ENV = process.env.EVENTS_FILE || 'events.json';
