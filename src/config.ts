export const AWS_REGION = process.env.AWS_REGION || '';

export const AWS_ACCESS_ID = process.env.AWS_ACCESS_ID || '';
export const AWS_SECRET = process.env.AWS_SECRET || '';
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || '';

export const JWT_SECRET = process.env.JWT_SECRET || '';

export const AWS_CONFIG = {
  bucketName: AWS_BUCKET_NAME,
  accessKeyID: AWS_ACCESS_ID,
  accessSecret: AWS_SECRET,
  region: AWS_REGION,
};

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

export const TRUSTEES_FILE_ENV = process.env.TRUSTEES_FILE || 'trustees.json';

export const BOARD_MEMBERS_FILE_ENV =
  process.env.BOARD_MEMBERS_FILE || 'board-members.json';

export const ABOUT_PAGE_FILE_ENV =
  process.env.ABOUT_PAGE_FILE || 'about-page.json';

export const PROJECTS_FILE_ENV =
  process.env.PROJECTS_FILE_ENV || 'projects.json';

export const NIGERIAN_YOUTH_VOICES_ENV =
  process.env.NIGERIAN_YOUTH_VOICES_FILE || 'nigerian-youth-voices.json';

export const VALUE_METRICS_ENV =
  process.env.VALUE_METRICS_FILE || 'value-metrics.json';

export const UN_COLLABORATIONS_ENV =
  process.env.UN_COLLABORATIONS_FILE || 'un-collaborations.json';

export const SUPPORTED_PROJECT_LOCATIONS_ENV =
  process.env.SUPPORTED_PROJECT_LOCATIONS || 'Lagos,Ibadan,Ogun,Enugu,Benin';

export const SUPPORTED_PROJECT_LOCATIONS =
  SUPPORTED_PROJECT_LOCATIONS_ENV.toLowerCase().split(',');

export const HERO_SECTION_ENV =
  process.env.HERO_SECTION_FILE || 'hero-section.json';

export const PARTNERS_SECTION_ENV =
  process.env.PARTNERS_SECTION_FILE || 'partners.json';

export const MANAGEMENT_ENV = process.env.MANAGEMENT_FILE || 'management.json';

export const ABOUT_FEATURE_ENV =
  process.env.ABOUT_FEATURE_FILE || 'about-feature.json';

export const CONTACTS_ENV = process.env.CONTACTS_FILE || 'contacts.json';

export const CONTRIBUTIONS_ENV =
  process.env.CONTRIBUTIONS_FILE || 'contributions.json';
export const OUR_TEAM_ENV = process.env.OUR_TEAM_FILE || 'our-team.json';
