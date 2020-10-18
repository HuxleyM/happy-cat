import React from 'react';
import { mount, shallow } from 'enzyme';
import Details from './Details'
import PasswordFields from './PasswordFields/PasswordFields'
import { UserContext } from '../../../../../Context/userContext';

describe('Details componant', () => {
    let wrapper;
    let context;
    const setAnswers = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation((init) => [init, setAnswers]);

    beforeEach(()=>{
        context = { user:{} };
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
        const context = { user:{} };
        expect(wrapper.containsMatchingElement(<PasswordFields />)).toEqual(true);
    })

    it('Should check that incorrect email triggers an error', ()=> {
        console.log(wrapper.debug())
        // const userNameField = wrapper.find('#userName')
        // const emailField = wrapper.find('#email')
        // const emailRetypeField = wrapper.find('#emailRetype')
        // const passwordField = wrapper.find('#password')
        // const passwordRetypeField = wrapper.find('#passwordRetype')
        
        expect(wrapper.exists('#userName')).toEqual(true);
        expect(wrapper.exists('#email')).toEqual(true);
        expect(wrapper.exists('#emailRetype')).toEqual(true);
        expect(wrapper.exists('#password')).toEqual(true);
        expect(wrapper.exists('#passwordRetype')).toEqual(true);
    })


    it('Should check that emails match else triggers an error', ()=> {
        console.dir(wrapper)
        const emailField = wrapper.find('#email')
        emailField.instance().value = "testing"
        const input = wrapper.find('input')
        console.log('heya', input)
        // expect(wrapper.contains('#email')).toEqual(true)
        
        console.log(emailField, wrapper.text())
        emailField.simulate("change");
        expect(setAnswers).toHaveBeenCalledWith("Test");
        const emailRetypeField = wrapper.find('#emailRetype')
        expect(wrapper.text().includes('do not match')).toEqual(true)
    })

    describe('#isDisabled', ()=>{

        it('disabled button should be disabled if not all fields are filled out', ()=> {

        })
        it('disabled button should be disabled if all fields filled but there is an error', ()=> {
            
        })

        it('disabled button should be enables if all fields filled and no errors', ()=> {
            
        })
    })


    describe('user returns to check values', ()=> {

        it('should display previously submitted answers', ()=> {})

        it('A user should be able to edit answers', ()=> {})
    })

  
})