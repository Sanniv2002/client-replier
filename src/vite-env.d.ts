/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_CUSTOM_THREAD_EMAIL: string
  readonly VITE_DEFAULT_THREAD_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}