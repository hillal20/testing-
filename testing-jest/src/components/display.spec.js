
import React from 'react';
import { shallow } from 'enzyme';

import Display from './Display';

describe('Display component', () => {
  it('should not differ from snapshot', () => {
    let props = { isLocked: true, isOpen: false };
    let element = shallow(<Display {...props} />);

    expect(element).toMatchSnapshot();
  });
});


it('dispaly', () => { })