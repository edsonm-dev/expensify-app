import {addExpense,editExpense,removeExpense} from '../../actions/expenses'


test('should setup remove expense action object',()=>{

    const action=removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })


})

test('should setup edit expense action object',()=>{

    const action=editExpense({id:'123abc',updates:{note:'202',createdAt:'012321',amount:'21332'}})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{note:'202',createdAt:'012321',amount:'21332'}
    })
})

test('should setup add expense action object with provided values',()=>{
    const expenseData={
        description:'Rent',
        amount:10000,
        createdAt:1000,
        note:'this was last month'
    }
    const action=addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {...expenseData,
        id:expect.any(String)}
    })
})

 test('should setup add expense action object with default values',()=>{

    
    const action=addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }

    })
}) 