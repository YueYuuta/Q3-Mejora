import { IReadPlayerModel } from './read-player.model';

export interface IUpdatePlayerModel extends Omit<IReadPlayerModel, 'id'> {}
