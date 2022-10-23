import { IReadPlayerModel } from '../models/read-player.model';
import { SearchFilterPipe } from './search.pipe';

const mock: IReadPlayerModel[] = [
  {
    attack: 10,
    defense: 10,
    firstName: 'leo',
    id: 1,
    idAuthor: 1,
    idPosition: 1,
    image: 'dasdas',
    lastName: 'ronaldo',
    skills: 100,
  },
  {
    attack: 10,
    defense: 10,
    firstName: 'leo',
    id: 1,
    idAuthor: 1,
    idPosition: 1,
    image: 'dasdas',
    lastName: 'messi 1',
    skills: 100,
  },
];

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "search player with coincidences"', () => {
    const pipe = new SearchFilterPipe();
    expect(pipe.transform(mock, 'messi')).toEqual([
      {
        attack: 10,
        defense: 10,
        firstName: 'leo',
        id: 1,
        idAuthor: 1,
        idPosition: 1,
        image: 'dasdas',
        lastName: 'messi 1',
        skills: 100,
      },
    ]);
  });

  // it('transforms "search player with not coincidences"', () => {
  //   const pipe = new SearchFilterPipe();
  //   expect(pipe.transform([0], '')).toEqual([]);
  // });
});
