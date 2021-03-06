import {ResultPicker} from '../../src/components/ResultPicker';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';

describe('ResultPicker', () => {
  it('should display a selected win/loss/disconnect', () => {
    const component = renderIntoDocument(
      <ResultPicker selected={"won"} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(2);
    expect(buttons[0].className).to.have.string('selected');
  });
});
