import authReducer from '../../reducers/auth'

test('should  login',()=>{

    const action={type:'LOGIN',uid:'22'}

    const state=authReducer({},action)

    expect(state).toEqual({uid:'22'})


})

test('should  logout',()=>{

    const action={type:'LOGOUT'}

    const state=authReducer({uid:'111'},action)

    expect(state).toEqual({})


})