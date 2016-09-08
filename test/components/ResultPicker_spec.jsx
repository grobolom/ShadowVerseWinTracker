import ResultPicker from '../../src/components/ResultPicker';

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
      <ResultPicker selected={"Won"} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(3);
    expect(buttons[0].className).to.equal('selected');
  });

  it('should call setting the result on a click', () => {
    let selected;
    const setResult = (vote) => selected = vote;

    const component = renderIntoDocument(
      <ResultPicker setResult={setResult} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[1]);

    expect(selected).to.equal('Lost');
  });
});
