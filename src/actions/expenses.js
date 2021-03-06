import {v4 as uuidv4} from 'uuid'
import database from '../firebase/firebase'


export const addExpense = (expense)=>({
    
        type:'ADD_EXPENSE',
        expense
        
    })


export const startAddExpense = (expenseData={}) => {
    return (dispatch,getState) =>{
        const uid =getState().auth.uid
        
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        }= expenseData

        const expense = {description,note,amount,createdAt}

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{dispatch(addExpense(
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

export const startRemoveExpense=({id=''}={})=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id:id}))
        })
    }
}


export const editExpense=({id='',updates={}}={}) =>{
    
    return {
        type:'EDIT_EXPENSE',
        id,
        updates
    }
}

export const startEditExpense=({id='',updates={}}={})=>{
    return (dispatch,getState)=>{
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense({id:id,updates}))
        })


    }
}

//SET_EXPENSES
export const setExpenses=(expenses)=>({
    type:'SET_EXPENSES',
    expenses
})


export const startSetExpenses=()=>{
    return (dispatch,getState)=>{
     const uid = getState().auth.uid
    
    return  database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
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