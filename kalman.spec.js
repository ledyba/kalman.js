import { expect } from 'chai';

import math from 'mathjs'
import Kalman from './kalman.js';

describe('test', () => {
  it('simple', () => {
  });
  it('with noize', () => {
    let k = new Kalman([0], [1]);
    /** @type {mathjs.Matrix} */
    let r;
    for(let i=0;i<1000;i++) {
      let y = 1 + math.norm(0.1);
      r = k.observe(
        /* F */ [1], /* G */ [1], /* Q */ [0],
        /* H */ [1],              /* R */ [0.1],
        /*y*/ [y]);
    }
    expect(math.pow(r.get([0]) - 1, 2)).lessThan(0.1);
  });
});