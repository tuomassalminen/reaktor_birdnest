import utils from './utils';

describe('Utils', () => {
  it('formatTime formats a date string into time for displaying', async () => {
    expect(utils.formatTime('2023-01-15T14:49:24.145Z')).toEqual('16:49:24');
    expect(utils.formatTime('2023-01-13T11:31:55.145Z')).toEqual('13:31:55');
    expect(utils.formatTime('2023-01-11T12:10:20.145Z')).toEqual('14:10:20');
  });
});