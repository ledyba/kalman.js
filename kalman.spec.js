import { expect } from 'chai';
import Kalman from './kalman.js';

describe('test', () => {
  it('simple', () => {
    let k = new Kalman([1], [0]);
    let r = k.observe([1], [1], [1], [1], [0], [0]);
    expect(r).equals(0);
  });
  it('simple', () => {
    let k = new Kalman([1], [0]);
    let r = k.observe([1], [1], [1], [1], [0], [0]);
    expect(r).equals(0);
  });
});