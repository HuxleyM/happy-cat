import React from 'react';
import { mount } from 'enzyme';
import Form from './Form';
import Details from './Questions/Details/Details';
import Preferences from './Questions/Preferences/Preferences';
import Confirm from './Questions/Confirm/Confirm'
import { UserContext } from '../../../Context/userContext';

describe('Form component', () => {

    it('Should color the nav bar in respect to a users position in the questions', () => {

    })

    it('If a user is on question 1 render Details', ()=>{
        const context = {user:{ currentlyOnQuestion:0}};
        const wrapper = mount(
          <UserContext.Provider value={context}>
            <Form />
          </UserContext.Provider>,
        );
        expect(wrapper.containsMatchingElement(<Details />)).toEqual(true);
        expect(wrapper.containsMatchingElement(<Preferences />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<Confirm />)).toEqual(false);
    })
    it('If a user is on question 2 render Preferences', ()=>{
        const context = {user:{ currentlyOnQuestion:1}};
        const wrapper = mount(
          <UserContext.Provider value={context}>
            <Form />
          </UserContext.Provider>,
        );
        expect(wrapper.containsMatchingElement(<Details />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<Preferences />)).toEqual(true);
        expect(wrapper.containsMatchingElement(<Confirm />)).toEqual(false);
    })
    it('If a user is on question 3 render Confirm', ()=>{
        const context = {user:{ currentlyOnQuestion:2}};
        const wrapper = mount(
          <UserContext.Provider value={context}>
            <Form />
          </UserContext.Provider>,
        );
        expect(wrapper.containsMatchingElement(<Details />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<Preferences />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<Confirm />)).toEqual(true);
    })

    describe('Navagation', ()=>{
        it('if i have answered all questions i should be able to navagate back and forth', ()=> {

        })
    })
})