import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense} from '../actions/expenses'
import {startRemoveExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
    
    onSubmit =(expense)=>{

        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/')
    }

    removeExpense =()=>{
        this.props.startRemoveExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }



    render(){
        return (<div>
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
                />
            <button onClick={this.removeExpense}>Remove</button> 

        </div>
)}}

const mapDispatchToProps=(dispatch,props)=>({
    editExpense:(id,expense)=>dispatch(editExpense({id:id,updates:expense})),
    startRemoveExpense:(data)=>dispatch(startRemoveExpense(data))
})
const mapStateToProps = (state,props)=>{
    return {
        expense:state.expenses.find((expense)=> {
           return expense.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)