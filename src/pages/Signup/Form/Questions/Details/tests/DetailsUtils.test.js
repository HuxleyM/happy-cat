import * as utils from '../Details'



describe('Details form components utils', () => {

    describe('#checkFieldsMatch', ()=>{
    

        it('it will return an object not containing an error if emails match', ()=>{

            const errorsMock = {}
            document.body.innerHTML =
            '<div>' +
            '  <input id="email">test@gmail.com</input>' +
            '  <input id="emailRetype">test@gmail.com</input>' +
            '</div>';

            expect(utils.checkFieldsMatch(errorsMock, {first:'email', second:'emailRetype'})).toEqual({})
        })

        it('it will return an object containing an error if emails do not match', ()=>{
            jest.spyOn(document, 'getElementById').mockImplementation((val)=>{
                if(val === 'email') return {value:'test1@gmail.com'}
                if(val === 'emailRetype') return {value:'test@gmail.com'}
            })
            const errorsMock = {}
  

            expect(utils.checkFieldsMatch(errorsMock, {first:'email', second:'emailRetype'})).toEqual({emailRetype:{error:"email's do not match"}})
        })

        it('if emails are typed to match it should remove the error from the errors object', ()=>{
            const errorsMock = {emailRetype:{error:'Email addresses do not match'}}

            jest.spyOn(document, 'getElementById').mockImplementation((val)=>{
                if(val === 'email') return {value:'test@gmail.com'}
                if(val === 'emailRetype') return {value:'test@gmail.com'}
            })  
            expect(utils.checkFieldsMatch(errorsMock, {first:'email', second:'emailRetype'})).toEqual({})
        })

        it('if should also work for password fields', ()=>{
            const errorsMock = {passwordRetype:{error:"password's do not match"}}

            jest.spyOn(document, 'getElementById').mockImplementation((val)=>{
                if(val === 'password') return {value:'secret'}
                if(val === 'passwordRetype') return {value:'secret'}
            })  
            expect(utils.checkFieldsMatch(errorsMock, {first:'password', second:'passwordRetype'})).toEqual({})
        })
    })

    describe('#validPassword', ()=> {
        it('should return false if it does not match', ()=>{
            jest.spyOn(document, 'getElementById').mockImplementation((val)=>{
                if(val === 'password') return {value:'secret'}
            })  
            expect(utils.validPassword()).toEqual(false)
        })

        it('should return true if is valid', ()=>{
            jest.spyOn(document, 'getElementById').mockImplementation((val)=>{
                if(val === 'password') return {value:'secret1!2'}
            })  
            expect(utils.validPassword()).toEqual(true)
        })
    })

    xdescribe('#handleFormSubscription', ()=>{

        it('should call validPassword', ()=>{

        })

        it('shouldCall checkFieldMatch for password',()=>{})

        it('shouldCall checkFieldMatch for email',()=>{})
    })


    
})