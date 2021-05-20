import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'


let editExpense,startRemoveExpense, history, wrapper;

beforeEach(()=>{
    editExpense=jest.fn()
    removeExpense=jest.fn()
    history = {push:jest.fn()}
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={startRemoveExpense} history ={history} expense={expenses[1]} />)
})


test('should render editexpense',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should handle editexpense',()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
})
test('should handle removeexpense',()=>{

    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
})