import moment from 'moment';


const filterReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month') 
}

const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SET_STARTDATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'SET_ENDDATE':
            return {
                ...state,
                endDate:action.endDate
            }
        case 'SET_TEXT':
            return {
                ...state,
                text:action.text
            }
        default:
            return state
    }
}

export default filterReducer
