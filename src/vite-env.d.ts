/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GAME_SERVER?: string;
  readonly VITE_GAME_KEY?: string;
  readonly VITE_TOKEN?: string;
  readonly VITE_GAME_VERSION?: string;
  readonly VITE_CHEATS_SERVER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
