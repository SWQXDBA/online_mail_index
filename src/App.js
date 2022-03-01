
import './App.css';
import {  BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {Login} from "./components/Login";
function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route  path='/login' element={<Login/>}/>
              <Route  path='/home' element={<HomePage/>}/>

              {/*routers.map(item=> <Route path="/home2" element={<HomePage />} />)*/}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
