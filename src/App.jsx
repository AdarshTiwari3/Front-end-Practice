import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './features/authentication/component/login';
import { Box } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box style={{width:"100%", height:"100vh"}}>
      <Router>
            <Routes>
              <Route path="/" element={<Login/>} />
              
            </Routes>
        </Router>
    </Box>
   
  )
}

export default App
