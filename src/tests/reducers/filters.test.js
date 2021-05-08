import filterReducer from '../../reducers/filters'
import moment from'moment'

test('shouldsetupdefaultfiltervalues',()=>{
    const state=filterReducer(undefined,{type:'@@INIT'})


    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')


    })
})


test('should set sortBy to amount',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')

})
test('should set sortBy to date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action={type:'SORT_BY_DATE'}
    const state=filterReducer(currentState,action)
    expect(state.sortBy).toBe('date')

})
test('should set text filter',()=>{
    const state=filterReducer(undefined,{type:'SET_TEXT',text:'test'})
    expect(state).toEqual({
        text:'test',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
    sortBy:'date'})

})
test('should set startdate filter',()=>{
    const state=filterReducer(undefined,{type:'SET_STARTDATE',startDate:moment(-10000)})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment(-10000),
        endDate:moment().endOf('month')    
    })

})
test('should set enddate filter',()=>{
    const state=filterReducer(undefined,{type:'SET_ENDDATE',endDate:moment(10000)})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment(10000)  
    })

})
