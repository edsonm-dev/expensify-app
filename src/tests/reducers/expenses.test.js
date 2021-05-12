import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'




test('shouldsetdefaultcase',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should  remove expense by id',()=>{

    const action={type:'REMOVE_EXPENSE',id:expenses[1].id}

    const state=expensesReducer(expenses,action)

    expect(state).toEqual([expenses[0],expenses[2]]
    )


})

test('should not remove expense by id',()=>{

    const action={type:'REMOVE_EXPENSE',id:31}

    const state=expensesReducer(expenses,action)

    expect(state).toEqual(expenses )


})

test('should add  expense by id',()=>{

    const action={type:'ADD_EXPENSE',expense:{    
        id:'5',
        description:'haha',
        note:'',
        amount: 103295,
        createdAt:moment(0).subtract(4,'days').valueOf()}
    }

    const state=expensesReducer(expenses,action)

    expect(state[3]).toEqual({    
        id:'5',
        description:'haha',
        note:'',
        amount: 103295,
        createdAt:moment(0).subtract(4,'days').valueOf()})


})

test('should edit expense by id',()=>{

    const action={type:'EDIT_EXPENSE',id:2,updates:{note:'test22'}}

    const state=expensesReducer(expenses,action)

    expect(state[1]).toEqual({id:'2',
    description:'Rent',
    note:'test22',
    amount: 400,
    createdAt:moment(0).subtract(4,'days').valueOf()} )


})

test('should not edit expense by id',()=>{

    const action={type:'EDIT_EXPENSE',id:31,updates:{note:'test22'}}

    const state=expensesReducer(expenses,action)

    expect(state).toEqual(expenses )


})