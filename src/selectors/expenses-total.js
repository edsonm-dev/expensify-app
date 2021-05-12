




const getExpensesTotal=(expenses)=>{
    const expensesAmounts = expenses.map((x)=>x.amount)

    return expensesAmounts.reduce((total,currentvalue)=>{return total+currentvalue},0)

}




export default getExpensesTotal;




