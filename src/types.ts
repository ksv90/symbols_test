import {
  ExtraSymbols,
  FreeSpinAndReSpinResult,
  GameContext,
  GameEvent,
  GameState,
  MoneySymbols,
  SpecialSymbol,
} from '@releaseband/mango';

import { Config } from './schemes';

export type Result = FreeSpinAndReSpinResult<MoneySymbols & SpecialSymbol & ExtraSymbols>;

export class Context extends GameContext<Config, Result> {}

export type EventType = GameEvent<'NEXT' | 'STOP' | 'COMPLETE'>;

export type StateValue = 'init';

export type State = GameState<StateValue, Context>;
