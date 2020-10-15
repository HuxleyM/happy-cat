import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';


const BUTTON_TEXT = 'jungle is massive'


describe('Button', () => {
  const wrapped = shallow(<Button text={BUTTON_TEXT} state='error'></Button>);

  it('should render the Button with text', () => {  
      expect(wrapped.text().includes(BUTTON_TEXT)).toBe(true)
  });


    it('Button is passed success should be enabled and green', () => {
        const wrapped = shallow(<Button text={BUTTON_TEXT} state='success'></Button>);
        expect(wrapped).toMatchSnapshot();
    })

    it('Button is passed error should be disabled and red', () => {
        const wrapped = shallow(<Button text={BUTTON_TEXT} state='error'></Button>);
        expect(wrapped).toMatchSnapshot();
    })

    it('Button is passed incomplete should be disabled and grey', () => {
        const wrapped = shallow(<Button text={BUTTON_TEXT} state='incomplete'></Button>);
        expect(wrapped).toMatchSnapshot();
    })



});


