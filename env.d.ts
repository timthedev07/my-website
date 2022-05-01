declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CONN_STRING_PROD: string;
      DB_CONN_STRING: string;
      DB_NAME: string;
      DB_COLLECTION_NAME: string;
    }
  }
}

export {}
