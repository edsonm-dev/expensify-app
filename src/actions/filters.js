

export const setTextFilter=(
    text='') =>{

    return {
        type:'SET_TEXT',
        text
    }

}
export const sortByAmount=()=>{
    return {
        type:'SORT_BY_AMOUNT'
    }
}
export const sortByDate=()=>{
    return {
        type:'SORT_BY_DATE'
    }
}
export const setStartDate=(startDate) =>{
    return {
        type:'SET_STARTDATE',
        startDate
    }
}
export const setEndDate=(endDate) =>{
    return {
        type:'SET_ENDDATE',
        endDate
    }
}