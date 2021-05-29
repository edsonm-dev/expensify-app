import React from 'react'
import {connect} from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'
import {Link} from 'react-router-dom'





export const  ExpensesSummary=(props)=>{


    const expensesCount = props.expenses.length
    const expensesTotal = getExpensesTotal(props.expenses)
    const expenseWord = expensesCount ===1? 'expense':'expenses'
    
    return(
    <div className="page-header">
        <div className="content-container">
        {expensesCount===0? (<p></p>): <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{numeral(expensesTotal).format('$0,0.00')}</span></h1>}
        <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
        </div>
        </div>
    </div>
    )




}






const mapStateToProps =(state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)