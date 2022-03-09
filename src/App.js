import './App.css';
import React, {Component} from 'react';
import {
    Routes,
    Route,
    Router, BrowserRouter

} from "react-router-dom";
import {createBrowserHistory} from "history"
import {HomePage} from "./components/HomePage";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import ProductDetail from "./components/ProductDetail";
export const UserContext = React.createContext();
/*export const history = createBrowserHistory();
history.listen((data)=>{
    const{action,location} = data
    window.location.href = location.pathname
})*/
/*history.listen((location, action) => {
    // this is called whenever new locations come in
    // the action is POP, PUSH, or REPLACE
});*/
export class App extends Component {
   state =  {
        context: {
            username: '111'
        }
    }

    render (){
        return (
            <UserContext.Provider value={this.state.context}>
                <BrowserRouter >
                    <Routes >
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/home' element={<HomePage/>}/>
                        <Route path='/productDetail/:productId' element = {<ProductDetail/>}/>
                        {/*routers.map(item=> <Route path="/home2" element={<HomePage />} />)*/}
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>

        );
    }
}
export default App;

