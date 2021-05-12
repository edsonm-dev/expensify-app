import React from 'react'
import {connect} from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'





export const  ExpensesSummary=(props)=>{


    const expensesCount = props.expenses.length
    const expensesTotal = getExpensesTotal(props.expenses)
    const expenseWord = expensesCount ===1? 'expense':'expenses'
    
    return(
    <div>
    
        {expensesCount===0? (<p></p>): <h1>{`Viewing ${expensesCount} ${expenseWord} totalling ${numeral(expensesTotal).format('$0,0.00')}`}</h1>}
    
    </div>
    )




}






const mapStateToProps =(state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)