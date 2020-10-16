import * as utils from '../Details'



describe('Details form components utils', () => {

    describe('#checkEmailsMatch', ()=>{
    

        it('it will return an object not containing an error if emails match', ()=>{

            const errorsMock = {}
            document.body.innerHTML =
            '<div>' +
            '  <input id="email">test@gmail.com</input>' +
            '  <input id="emailRetype">test@gmail.com</input>' +
            '</div>';

            expect(utils.checkEmailsMatch(errorsMock)).toEqual({})
        })

        it('it will return an object containing an error if emails do not match', ()=>{
            jest.spyOn(document, 'getElementById').mockImplementation((val)=>{
                if(val === 'email') return {value:'test1@gmail.com'}
                if(val === 'emailRetype') return {value:'test@gmail.com'}
            })
            const errorsMock = {}
  

            expect(utils.checkEmailsMatch(errorsMock)).toEqual({emailRetype:{error:'Email addresses do not match'}})
        })

        it('if emails are typed to match it should remove the error from the errors object', ()=>{
            const errorsMock = {emailRetype:{error:'Email addresses do not match'}}

            jest.spyOn(document, 'getElementById').mockImplementation((val)=>{
                if(val === 'email') return {value:'test@gmail.com'}
                if(val === 'emailRetype') return {value:'test@gmail.com'}
            })  
            expect(utils.checkEmailsMatch(errorsMock)).toEqual({})
        })
    })

    
})