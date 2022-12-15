import { Flights } from './flights';

describe('Flights', () => {
  it('should create an instance', () => {
    expect(new Flights(1,1,1,"1","1")).toBeTruthy();
  });
});
