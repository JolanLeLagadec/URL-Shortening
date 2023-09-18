

import Boost from './components/Boost'
import Footer from './components/Footer'
import Form from './components/Form'
import Intro from './components/Intro'
import { Toaster } from 'react-hot-toast'

import Links from './components/Links'


import Statistics from './components/Statistics'


function App() {


  return (
    <>
       <Toaster/>
        <Intro />
        <Form />
        <Statistics />
        <Boost />
        <Footer />
         
    </>
  )
}

export default App
