
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense,addExpense,editExpense,removeExpense,setExpenses,startSetExpenses,startRemoveExpense,startEditExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore =configureMockStore([thunk]);

const uid="testuid"
beforeEach((done)=>{

    const expensesData={}

    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expensesData[id]={description,note,amount,createdAt}
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=> done())
})





test('should setup remove expense action object',()=>{

    const action=removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })


})

test('should remove expense from firebase',(done)=>{
    const store = createMockStore({auth:{uid}})

    const id = expenses[2].id

    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy()
        done()
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

test('should edit expense in database',(done)=>{

    const store=createMockStore({auth:{uid}})
    const id = expenses[0].id
    const expenseData = {
        description:'mouse',
        amount:200,
        note:'noter',
        createdAt:1000
    }
    store.dispatch(startEditExpense({id:id,expenseData})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            expenseData
        })

        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        
        expect(snapshot.val().amount).toEqual(expenseData.amount)
    })
    done()
})


test('should setup add expense action object with provided values',()=>{
    
    
    expect(addExpense(expenses[2])).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    })
})


test('should add expense to database and store',(done)=>{
    const store = createMockStore({auth:{uid}})
    const expenseData = {
        description:'mouse',
        amount:3000,
        note:'noter',
        createdAt:1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=> {
        const actions =store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        })


        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');


}).then((snapshot)=> {
    expect(snapshot.val()).toEqual(expenseData)
    done()
})
done()
})

test('should add expense to database and store default',(done)=>{
    const store = createMockStore({auth:{uid}})
    const expenseData = {
        description:'',
            note:'',
            amount:0,
            createdAt:0
    }
    store.dispatch(startAddExpense({})).then(()=> {
        const actions =store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                ...expenseData
            }
        })


        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');


}).then((snapshot)=> {
    expect(snapshot.val()).toEqual(expenseData)
    done()
})
done()
})



test('should setup set expense action object',()=>{
    const action =setExpenses(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses})
})

test('should fetch expenses from firebase',(done)=>{

    const store=createMockStore({auth:{uid}})

    store.dispatch(startSetExpenses()).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done()
    })



})
/* 
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
})  */