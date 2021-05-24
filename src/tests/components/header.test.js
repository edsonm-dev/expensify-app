import React from 'react'
import Header from '../../components/Header'
import {shallow} from 'enzyme'


test('should render header',()=>{
    
    const wrapper=shallow(<Header startLogout={()=>{}} />)

    expect(wrapper).toMatchSnapshot()

    //expect(wrapper.find('h1').text()).toBe('Expensify')
    /* const renderer=new ReactShallowRenderer()
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
    console.log(renderer.getRenderOutput()); */
})

test('start log out to buttonclick',()=>{

    const startLogout=jest.fn()
    const wrapper=shallow(<Header startLogout={startLogout} />)

    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})