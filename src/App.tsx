
import { Box } from '@radix-ui/themes'
import './App.css'
import Navigation from './components/Navigation'
import { Route  , Routes} from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  

  return (
    <Box>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Box>
  )
}

export default App
