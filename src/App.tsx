import React from 'react';
import {GlobalStyles} from "./styles/GlobalStyles";
import {Header} from "./components/header/Header";
import {gakTheme} from "./styles/Theme.styled";

const App = () => {

    const store = {
        colors: {...gakTheme.colors},
        media: {...gakTheme.media}
    }
    console.log(store)

    // ${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : GakTheme.colors.text}
    // localStorage.setItem('textColor', 'red')
    //
    // localStorage.removeItem('textColor')

    return (
        <div className="App">
            <Header/>
            <GlobalStyles/>


        </div>
    );

}

export default App;
