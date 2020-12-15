import React, { Component ,useState } from 'react';
import Container from '../components/Container';
import SubmitButton from '../components/SubmitButton';
import HeaderTitle from '../components/HeaderTitle';

const GameStartScreen = props => {
    return (
        <Container>
            <HeaderTitle>당신의 혈액형을 맞춰볼게요!</HeaderTitle>
            <SubmitButton onClick={() => props.setScreenState()} value="게임 시작!"/>
        </Container>
    );
}

// class GameStartScreen extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
            
//         };
//     }

//     render() {
//         return(
//             <Container>
//             {/* <form action='http://localhost:3001/createData'>
//                 <SubmitButton value="데이터 생성!"/>
//             </form> */}
//             <HeaderTitle>당신의 혈액형을 맞춰볼게요!</HeaderTitle>
//             <form action='http://localhost:3001/questionScreen' method='POST'>
//                 <input required='true' name='userName' type='text'/>
//                 <SubmitButton value="게임 시작!"/>
//             </form>
//         </Container>
//         );
//     }
// }

export default GameStartScreen;