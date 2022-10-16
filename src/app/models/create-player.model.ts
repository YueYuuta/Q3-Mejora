import { IReadPlayerModel } from './read-player.model';

export interface ICreatePlayerModel extends Omit<IReadPlayerModel, 'id'> {}
