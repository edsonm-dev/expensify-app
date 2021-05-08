import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'


test ('should render expenselist', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test ('should render expenselist with empty', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

