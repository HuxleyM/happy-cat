import React from 'react';
import { mount } from 'enzyme';
import Details from '../Details'
import { UserContext } from '../../../../../../Context/userContext';
import * as utils from '../Details'

describe('Details form components', () => {

    const context = { };
    const wrapper = mount(
      <UserContext.Provider value={context}>
        <Details />
      </UserContext.Provider>,
    );
    const form = wrapper.find('form')
    const userNameField = wrapper.find('#userName')
    const emailField = wrapper.find('#email')
    const emailRetypeField = wrapper.find('#emailRetype')
    const passwordField = wrapper.find('#password')
    const passwordRetypeField = wrapper.find('#passwordRetype')

  it("On submit shouldn't call handle form if fields are empty", () => {
    const handleFormSubmissionMock = jest.spyOn(utils, 'handleFormSubmission')
    form.simulate('click')
    expect(handleFormSubmissionMock.mock.calls.length).toBe(0);
  });

  it("On submit should call handle form if fields are filled", () => {
    const handleFormSubmissionMock = jest.spyOn(utils, 'handleFormSubmission')

    form.simulate('submit', {
        preventDefault: () => {},
        target: {
          elements: {
            userName: { value: 'blah' },
            email: { value: 'blah@gmail.com' },
            emailRetype: { value: 'blah@gmail.com' },
            password: { value: 'some value' },
            passwordRetype: { value: 'some value' }
          }
        }
    });
    expect(handleFormSubmissionMock).toBeCalled();
  });


});
