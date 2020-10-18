import React from 'react';
import { mount } from 'enzyme';
import Signup from './Signup';
import Form from './Form/Form';
import Completed from './Completed/Completed';
import Loading from './Loading/Loading';
import { UserContext } from '../../Context/userContext';

xdescribe('Signup Component', () => {
  it('Should render Loading component if loading', () => {
    const context = { };
    const wrapper = mount(
      <UserContext.Provider value={context}>
        <Signup />
      </UserContext.Provider>,
    );
    expect(wrapper.containsMatchingElement(<Loading />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<Form />)).toEqual(false);
    expect(wrapper.containsMatchingElement(<Completed />)).toEqual(false);
  });

  it("Should render Form component if a user hasn't completed sign up", () => {
    const context = { user: { completed: false } };
    const wrapper = mount(
      <UserContext.Provider value={context}>
        <Signup />
      </UserContext.Provider>,
    );

    expect(wrapper.containsMatchingElement(<Form />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<Completed />)).toEqual(false);
  });

  it('Should render Confirmation component if a user has completed sign up', () => {
    const context = { user: { completed: true } };
    const wrapper = mount(
      <UserContext.Provider value={context}>
        <Signup />
      </UserContext.Provider>,
    );
    expect(wrapper.containsMatchingElement(<Form />)).toEqual(false);
    expect(wrapper.containsMatchingElement(<Completed />)).toEqual(true);
  });
});
