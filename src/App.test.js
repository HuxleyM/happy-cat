import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Signup from './Signup/Signup'


let wrapped = shallow(<App></App>);

describe('App', () => {
  it('should render the Signup Component correctly', () => {  
    expect(wrapped.containsMatchingElement(<Signup />)).toEqual(true); 
    expect(wrapped).toMatchSnapshot();
  });

});


