import {login,logout} from '../../actions/auth'

test('should set uid',()=>{
    const result = login('222')

    expect(result).toEqual({type:'LOGIN',uid:'222'})

})

test('should clear uid',()=>{
    const result = logout()

    expect(result).toEqual({type:'LOGOUT'})

})