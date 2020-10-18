import React from 'react';
import { mount, shallow } from 'enzyme';
import Details from './Details'
import PasswordFields from './PasswordFields/PasswordFields'
import { UserContext } from '../../../../../Context/userContext';


describe('Details component', () => {
    let wrapper;
    let context;
    const setAnswers = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [init, setAnswers]);

    beforeEach(()=>{
        context = { user:{userName:"hi"} };
        wrapper = mount(
          <UserContext.Provider value={context}>
            <Details />
          </UserContext.Provider>,
        );
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should render password Container', ()=> {
        expect(wrapper.containsMatchingElement(<PasswordFields />)).toEqual(true);
    })

    it('Should render all input fields', ()=> {
        
        expect(wrapper.containsMatchingElement(<PasswordFields />)).toEqual(true);
    })

  
})