import expenses from  '../fixtures/expenses'
import getExpensesTotal from '../../selectors/expenses-total'

test('should sum array amount',()=>{


    const result = getExpensesTotal(expenses)
    expect(result).toBe(1000)



})
test('should return 0 for empty arr',()=>{


    const result = getExpensesTotal([])
    expect(result).toBe(0)



})


test('should return 1 for 1 arr',()=>{


    const result = getExpensesTotal([{amount:1}])
    expect(result).toBe(1)



})