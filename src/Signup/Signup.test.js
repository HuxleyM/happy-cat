import React from 'react';
import { mount } from 'enzyme';
import Signup from './Signup'
import Form from './Form/Form'
import Confirmation from './Confirmation/Confirmation'
import {UserContext} from '../Context/userContext'

describe('Signup Component', () => {

    it("Should render Form component if a user hasn't completed sign up",()=>{
        const context = { user:{completed: false}}
        const wrapper = mount(
            <UserContext.Provider value={context}>
                <Signup/>
            </UserContext.Provider>
        )
    
        expect(wrapper.containsMatchingElement(<Form />)).toEqual(true); 
        expect(wrapper.containsMatchingElement(<Confirmation />)).toEqual(false); 
    })

    it("Should render Confirmation component if a user has completed sign up",()=>{
        const context = { user:{completed: true}}
        const wrapper = mount(
            <UserContext.Provider value={context}>
                <Signup/>
            </UserContext.Provider>
        )
        expect(wrapper.containsMatchingElement(<Form />)).toEqual(false); 
        expect(wrapper.containsMatchingElement(<Confirmation />)).toEqual(true); 

    })
})