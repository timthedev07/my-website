declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USERNAME: string;
      EMAIL_PASSWORD: string;
      DB_CONN_STRING: string;
      DB_NAME: string;
      DB_COLLECTION_NAME: string;
      WHITELISTED_ADMIN_EMAILS: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      NEXT_AUTH_SECRET: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      GITHUB_REST_TOKEN: string;
    }
  }
}

export {}
