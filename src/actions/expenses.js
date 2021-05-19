import {v4 as uuidv4} from 'uuid'
import database from '../firebase/firebase'


export const addExpense = (expense)=>({
    
        type:'ADD_EXPENSE',
        expense
        
    })


export const startAddExpense = (expenseData={}) => {
    return (dispatch) =>{
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        }= expenseData

        const expense = {description,note,amount,createdAt}

        return database.ref('expenses').push(expense).then((ref)=>{dispatch(addExpense(
            {
                id:ref.key,
                ...expense
            }

        ))})
    }
}

export const removeExpense = (
    {id=''}={}
    )=>{
    return {
        type:'REMOVE_EXPENSE',
        id  
    }
}

export const editExpense=({id='',updates={}}={}) =>{
    console.log({
        type:'EDIT_EXPENSE',
        id,
        updates
    });
    
    return {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}

//SET_EXPENSES
export const setExpenses=(expenses)=>({
    type:'SET_EXPENSES',
    expenses
})


export const startSetExpenses=()=>{
    return (dispatch)=>{
     
    
    return  database.ref('expenses').once('value').then((snapshot)=>{
        const exps=[];
        snapshot.forEach((child)=>{
          exps.push({
            id:child.key,
            ...child.val()
          })
        
        })
        dispatch(setExpenses(exps))


})
    }}