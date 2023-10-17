import React, {useState} from 'react';
import {GlobalStyles} from './styles/GlobalStyles';
import {Header} from './components/header/Header';
import {styled} from 'styled-components';

const App = () => {

    const [textColor, setTextColor] = useState<string>(`${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : '#ffffff'}`)
    const [background, setBackground] = useState<string>(`${localStorage.getItem('background') ? localStorage.getItem('background') : '#E9F1FA'}`)
    const [primary, setPrimary] = useState<string>(`${localStorage.getItem('primary') ? localStorage.getItem('primary') : '#0f17eb'}`)
    const [secondary, setSecondary] = useState<string>(`${localStorage.getItem('secondary') ? localStorage.getItem('secondary') : '#0086ff'}`)

    const q1 = () => {
        localStorage.setItem('textColor', 'red')
        localStorage.setItem('background', '#000000')
    }

    return (
        <StyledApp className="App" $textColor={textColor}>
            <Header setTextColor={setTextColor} setBackground={setBackground} setPrimary={setPrimary}
                    setSecondary={setSecondary}/>
            <GlobalStyles $textColor={textColor} $background={background} $primary={primary} $secondary={secondary}/>
        </StyledApp>
    );

}

export default App;

type StyledAppPropsType = {
    $textColor: string
}

const StyledApp = styled.div<StyledAppPropsType>`
    //color: ${(props) => props.$textColor}

`;

