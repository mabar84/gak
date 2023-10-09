import React from 'react';
import {GlobalStyles} from "./styles/GlobalStyles";
import {Header} from "./components/header/Header";
import {GakTheme} from "./styles/Theme.styled";

const App = () => {
    // localStorage.setItem('textColor', 'red')
    console.log(localStorage.getItem('textColor'))


    return (
        <div className="App">
            <Header/>
            <GlobalStyles/>


        </div>
    );

}

export default App;
