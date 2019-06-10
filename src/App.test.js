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
    expect(wrapper.find("#timer-label").text()).toEqual("Session");
  });

  //User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).
  it('Can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).', () => {
    expect(wrapper.find("#time-left").text()).toEqual("25:00");
  })

  // User Story #9: I can see a clickable element with a corresponding id="start_stop".
  it('Can see a clickable element with a corresponding id="start_stop".', () => {
    expect(mounted.find("#start_stop").length).toEqual(1);
  })

  // User Story #10: I can see a clickable element with a corresponding id="reset".
  it('Can see a clickable element with a corresponding id="reset".', () => {
    expect(mounted.find("#reset").length).toEqual(1);
  })

  // User Story #11: When I click the element with the id of reset, 
  //any running timer should be stopped, 
  //the value within id="break-length" should return to 5, 
  //the value within id="session-length" should return to 25, 
  //and the element with id="time-left"
  // should reset to it's default state
  it('Should reset values when reset button is clicked', () => {
    mounted.setState({breakLength: 10, sessionLength: 10})
    mounted.update();
    expect(mounted.state('breakLength')).toEqual(10);
    expect(mounted.state('sessionLength')).toEqual(10);

    mounted.find("#reset").simulate("click");
    expect(mounted.state('breakLength')).toEqual(5);
    expect(mounted.state('sessionLength')).toEqual(25);
    //the value within id="break-length" should return to 5
    expect(mounted.find("#break-length").text()).toEqual("5");
    //the value within id="session-length" should return to 25,
    expect(mounted.find("#session-length").text()).toEqual("25"); 
    //the element with id="time-left" should reset to it's default state.
    expect(mounted.find("#time-left").text()).toEqual("25:00");
  })

  //User Story #12: When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.
  it("Decrements breaklength when break-decrement is clicked, and you can see the updated value", () => {
    mounted.setState({breakLength: 10})
    mounted.find("#break-decrement").simulate('click');
    expect(mounted.state('breakLength')).toEqual(9);
    expect(mounted.find("#break-length").text()).toEqual("9"); 
  })

  //User Story #13: When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.
  it("Increments breaklength when break-increment is clicked, and you can see the updated value", () => {
    mounted.setState({breakLength: 10})
    mounted.find("#break-increment").simulate('click');
    expect(mounted.state('breakLength')).toEqual(11);
    expect(mounted.find("#break-length").text()).toEqual("11"); 
  })

  //User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.
  it("Decrements sessionlength when session-decrement is clicked, and you can see the updated value", () => {
    mounted.setState({sessionLength: 13})
    mounted.find("#session-decrement").simulate('click');
    expect(mounted.state('sessionLength')).toEqual(12);
    expect(mounted.find("#session-length").text()).toEqual("12");
  })

  //User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.
  it("Increments sessionlength when session-increment is clicked, and you can see the updated value", () => {
    mounted.setState({sessionLength: 13})
    mounted.find("#session-increment").simulate('click');
    expect(mounted.state('sessionLength')).toEqual(14);
    expect(mounted.find("#session-length").text()).toEqual("14");
  })

  //User Story #16: I should not be able to set a session or break length to <= 0.
  it("Should not decrement session or break length to less than 1", () => {
    mounted.setState({breakLength: 1, sessionLength: 1})
    mounted.find("#session-decrement").simulate('click');
    mounted.find("#break-decrement").simulate('click');
    expect(mounted.state('sessionLength')).toEqual(1);
    expect(mounted.state('breakLength')).toEqual(1);
  })

  //User Story #17: I should not be able to set a session or break length to > 60.
  it("Should not decrement session or break length to greater than 60", () => {
    mounted.setState({breakLength: 60, sessionLength: 60})
    mounted.find("#session-increment").simulate('click');
    mounted.find("#break-increment").simulate('click');
    expect(mounted.state('sessionLength')).toEqual(60);
    expect(mounted.state('breakLength')).toEqual(60);
  })

});


