import React, { Component, useState } from 'react';
import Container from '../components/Container';
import HeaderTitle from '../components/HeaderTitle';
import SubmitButton from '../components/SubmitButton';
import Card from '../components/Card';
import axios from 'axios';
import '../App.css';

const GameOverScreen = props => {
    const [highScore, setHighScore] = useState('');

    const setHighScoreHandler = (ans) => {
        setHighScore(ans);
    }

    const getHighScore = () =>{
        axios.get("http://localhost:3001/onGameOver")
      .then(res => {
        props.initQnum();
        setHighScoreHandler(res.data);
      });
    }
    return (
        <Container>
            <HeaderTitle>당신의 혈액형은 아마도 ...</HeaderTitle>
            <Card>
                <div className="divText">{highScore}</div>
                <SubmitButton onClick={() => getHighScore()} value='결과보기'/>
                <SubmitButton onClick={() => props.initScreenState()} value='돌아가기'/>
            </Card>
        </Container>
    )
}



// class GameOverScreen extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={

//         };
//     }

//     render() {
//         return(
//             <Container>
//             <HeaderTitle>롸로라</HeaderTitle>
//             <Card>
//                 {}
//                 <form action='http://localhost:3000/qq' method='POST'>
//                 <input type='radio' name='answer' value='one' />{}
//                 <input type='radio' name='answer' value='two' />{}
//                 <input type='radio' name='answer' value='three' />{}
//                 <input type='radio' name='answer' value='four' />{}
//                 <SubmitButton value='다음'/>
//                 </form>
//             </Card>
//         </Container>
//         );
//     }

// }

export default GameOverScreen;