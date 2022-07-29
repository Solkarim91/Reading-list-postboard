import Home from './components/Home';
import React from 'react';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import { Route, Routes } from 'react-router-dom';

// export default function App() {
//   return (
//     <div>
//       {/* <Navbar /> */}
//       <Home />
//     </div>
//   );
// }

const App = () => {
  return (
    <div className='application'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/create"
            element={<CreatePost/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;