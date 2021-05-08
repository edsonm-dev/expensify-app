import {setStartDate,setEndDate,setTextFilter,sortByAmount,sortByDate} from   '../../actions/filters'
import moment from  'moment'


test('should generate set start date action',()=>{
    const action=setStartDate(moment(0))

    expect(action).toEqual({
        type:'SET_STARTDATE',
        startDate:moment(0)
    })

})

test('should generate set end date action',()=>{
    const action=setEndDate(moment(0))

    expect(action).toEqual({
        type:'SET_ENDDATE',
        endDate:moment(0)
    })
    
})

test('should generate set textfilter action',()=>{
    const action=setTextFilter('test')

    expect(action).toEqual({
        type:'SET_TEXT',
        text:'test'
    })
    
})
test('should generate set textfilter action def',()=>{
    const action=setTextFilter()

    expect(action).toEqual({
        type:'SET_TEXT',
        text:''
    })
    
})

test('should generate sortbyamount action',()=>{
    const action=sortByAmount()

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
    
})

test('should generate sortbydate action',()=>{
    const action=sortByDate()

    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
    
})