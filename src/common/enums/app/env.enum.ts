// const { VITE_APP_API_PATH, VITE_APP_API_PATH_TOKEN } = import.meta.env;

const BASE_URL = 'https://api.wisey.app/api/v1/core/preview-courses';
const TOKEN_URL = 'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions';

const ENV = {
  API_PATH: BASE_URL,
  TOKEN_PATH: TOKEN_URL,
};

export { ENV };
