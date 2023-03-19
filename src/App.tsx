import { fullConfig, Game } from '@releaseband/mango';
import { Main } from '@releaseband/rowan';
import { useMemo } from 'react';

import { Info } from './Info';
import { createStateMachine } from './state';

export default function App() {
  const game = useMemo(() => {
    return new Game('Symbols test', createStateMachine(), fullConfig);
  }, []);

  return (
    <Main game={game}>
      <Info />
    </Main>
  );
}
