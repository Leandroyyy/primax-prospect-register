/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EVO_USERNAME: string
  readonly VITE_EVO_PASSWORD: string
  readonly VITE_EVO_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}