import '@releaseband/rowan/style.css';

import { getURLParam } from '@releaseband/mango';
import { ErrorBoundary, HomeProvider, LangProvider, Preloader } from '@releaseband/rowan';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { SettingsProps } from './Settings';

const cheatsURL = import.meta.env.VITE_CHEATS_SERVER;
const serverURL = getURLParam('endpoint', import.meta.env.VITE_GAME_SERVER);

async function loadTranslate(language: string) {
  return import(`../locales/${language}/translation.json`);
}

const App = lazy(() => import('./App'));

let Settings: React.FC<SettingsProps> | undefined;

if (cheatsURL && serverURL) {
  Settings = lazy(() => import('./Settings'));
}

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <HomeProvider url={getURLParam('returnUrl')}>
    <ErrorBoundary>
      <Suspense fallback="loading">
        {Settings && cheatsURL && serverURL && (
          <Settings serverURL={serverURL} cheatsURL={cheatsURL} />
        )}
        <Suspense fallback={<Preloader />}>
          <LangProvider loadTranslate={loadTranslate}>
            <App />
          </LangProvider>
        </Suspense>
      </Suspense>
    </ErrorBoundary>
  </HomeProvider>,
);
