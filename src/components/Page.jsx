import React from 'react'
import { Circle } from './Circle'
import { Footer } from './Footer'
import { Header } from './Header'
import { HeaderBG } from './HeaderBG'

export const Page = () => {
  return (
    <div className='App'>
        <Header/>
        <HeaderBG/>
        <Circle/>
        <Footer/>
    </div>
  )
}
