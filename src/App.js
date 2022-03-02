import './App.css';
import React, {Component} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {Login} from "./components/Login";

export const UserContext = React.createContext();

export class App extends Component {
   state =  {
        context: {
            username: '111'
        }
    }
    render (){
        return (
            <UserContext.Provider value={this.state.context}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/home' element={<HomePage/>}/>
                        {/*routers.map(item=> <Route path="/home2" element={<HomePage />} />)*/}
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>

        );
    }
}
export default App;

