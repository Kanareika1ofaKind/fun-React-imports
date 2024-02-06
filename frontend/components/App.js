import React from 'react'
import theFoo, {sum, multiply } from '../helpers/helpers'  // '../helpers/helpers.js' --> .js is not necessary
import Nav from './Nav'
import Footer from './Footer'


function App() {
  return (
    <div>
      <Nav />

      <div>5 plus 6 is {sum(5, 6)}</div>
      <div>5 times 6 is {multiply(5, 6)}</div>
      <div>{theFoo()}</div>

      <Footer />
    </div>
  )
}

export default App
