
import { Route, Routes } from 'react-router';

// import PokeApi from './components/PokeApi';
import PokeList from './components/PokeList';

function App() {

  return (
    <div>
      <Routes>

          <Route path="/" element={<PokeList/>} />
          
      </Routes>
    </div>
  )
}

export default App
