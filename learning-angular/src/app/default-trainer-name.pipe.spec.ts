import { DefaultTrainerNamePipe } from './default-trainer-name.pipe';

describe('DefaultTrainerNamePipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultTrainerNamePipe();
    expect(pipe).toBeTruthy();
  });
});
