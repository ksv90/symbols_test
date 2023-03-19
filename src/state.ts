import { getURLParam } from '@releaseband/mango';
import { StateMachine } from '@xstate/fsm';

import { Context, EventType, State } from './types';

export const createStateMachine = (): StateMachine.Config<Context, EventType, State> => ({
  context: new Context({
    serverURL: getURLParam('endpoint', import.meta.env.VITE_GAME_SERVER),
    gameId: getURLParam('game', import.meta.env.VITE_GAME_KEY),
    token: getURLParam('token', import.meta.env.VITE_TOKEN),
    buyFeature: false,
    showBonus: true,
  }),
  initial: 'init',
  states: {
    init: {},
  },
});
