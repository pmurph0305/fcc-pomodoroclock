import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {shallow, mount} from 'enzyme';

describe('App tests', () => {
  let wrapper;
  let mounted;
  beforeEach(() => {
    wrapper = shallow(<App/>);
    mounted = mount(<App/>);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length").
  it ('Can see element with id="break-label" that contains the string "Break Length"', () => {
    expect(mounted.find('#break-label').text()).toEqual("Break Length");
  })

  // User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length").
  it ('Can see an element with id="session-label" that contains the string "Session Length"', () => {
    expect(mounted.find('#session-label').text()).toEqual("Session Length");
  })

  // User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".
  it('Can see two elements with corresponding IDs: id="break-decrement" and id="session-decrement"', () => {
    expect(mounted.find('#break-decrement').length).toEqual(1);
    expect(mounted.find('#session-decrement').length).toEqual(1);
  })

  // User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".
  it('Can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment"', () => {
    expect(mounted.find('#break-increment').length).toEqual(1);
    expect(mounted.find('#session-increment').length).toEqual(1);
  })

  //User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.
  it('Can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5', () => {
    expect(mounted.find("#break-length").text()).toEqual("5");
  })

  // User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25.

  it('Can see an element with a corresponding id="session-length", which by default displays a value of 25', () => {
    expect(mounted.find("#session-length").text()).toEqual("25");
  })

  // User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").
  it('Can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").', () => {
    expect(mounted.find("#timer-label").text()).toEqual("Session");
  });

  //User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).
  it('Can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).', () => {
    expect(mounted.find("#time-left").text()).toEqual("25:00");
  })
});


