import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters }from '../../components/ExpenseListFilters'
import {filters,altFilters}from '../fixtures/filters'

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper

beforeEach(()=>{
    setTextFilter=jest.fn()
    sortByAmount=jest.fn()
    sortByDate=jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()

    wrapper=shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        
        />)
})

test('should render comp correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})
test('should render comp with altdata correctly',()=>{
    
    wrapper.setProps({filters:altFilters})
    expect(wrapper).toMatchSnapshot()
})

test('should handle textchange correctly',()=>{
    const event = {target: { value: 'amount'}}
    wrapper.find('input').simulate('change',event)
    expect(setTextFilter).toHaveBeenLastCalledWith('amount')
})
test('should sortbydate correctly',()=>{
    const event = {target: { value: 'date'}}
    wrapper.find('select').simulate('change',event)
    expect(sortByDate).toHaveBeenCalled()
})
test('should sortbyamount correctly',()=>{
    const event = {target: { value: 'amount'}}
    wrapper.find('select').simulate('change',event)
    expect(sortByAmount).toHaveBeenCalled()
})
test('should startdate correctly',()=>{
    
    wrapper.find('DateRangePicker').prop('onDatesChange')(filters)
    expect(setStartDate).toHaveBeenLastCalledWith(filters.startDate)
})
test('should enddate correctly',()=>{
    wrapper.find('DateRangePicker').prop('onDatesChange')(filters)
    expect(setEndDate).toHaveBeenLastCalledWith(filters.endDate)
})