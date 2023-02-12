import React  from 'react'

import Login from './components/Login'
import Master from './components/Master'
import Student from './components/Student'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MasterCalculations from './components/MasterCalculations'
import StudentCalculations from './components/StudentCalculations'

function App () {
    
    return(
        <>
        <BrowserRouter>
        <Routes >
        < Route exact path='/' element={<Login/>}  />
        < Route exact path='/login' element={<Login/>}  />
        < Route exact path='/master' element={<Master />}/>
        <Route exact path='/student' element={<Student />} />
        <Route exact path='/masterCalculations' element={<MasterCalculations />} />
        <Route exact path='/studentCalculations' element={<StudentCalculations />} />

        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;