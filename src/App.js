import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import GameStartScreen from './screens/GameStartScreen';
import GameOverScreen from './screens/GameOverScreen';
import QuestionScreen from './screens/QuestionScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenState: 0,
      Qnum: 0,
      questionList:[]
    };
  }

  setScreenState = () => {
    const {screenState} = this.state;
    this.setState({screenState: screenState + 1});
  }

  initScreenState = () =>{
    const {screenState} = this.state;
    this.setState({screenState: screenState - 2});
  }

  setQnum = () => {
    const {Qnum} = this.state;
    this.setState({Qnum: Qnum + 1});
  }

  initQnum = () => {
    const {Qnum} = this.state;
    this.setState({Qnum: 0});
  }

  render() {
    const { screenState, Qnum, questionList } = this.state;
    if (screenState === 0) 
    return <GameStartScreen 
    screenState={screenState} 
    setScreenState={this.setScreenState}
    />;
    else if (screenState === 1) 
    return <QuestionScreen 
    questionList={questionList}
    Qnum={Qnum} 
    setQnum={this.setQnum}
    screenState={screenState}
    setScreenState={this.setScreenState}
    />;
    return <GameOverScreen 
    screenState={screenState}
    initQnum={this.initQnum}
    initScreenState={this.initScreenState}
    />;
  }

  callAPI = () => {
    axios.get("http://localhost:3001/onQuestion")
      .then(res => {
        this.setState({ questionList : this.state.questionList.concat(res.data)});
        //this.setState({ questionList : questionList.push(res.data)});
        //console.log(questionList);
      });
  }

  removeDataAPI = () => {
    axios.get("http://localhost:3001/onGameOver/remove")
    .then(res => {
      console.log("data removed");
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  componentWillUnmount(){
    this.removeDataAPI();
  }
}

export default App;


// export default function App() {
//   const [screenState, setScreenState] = useState(0);
//   const [Qnum, setQnum] = useState(0);
//   const [questionList, setQuestionList] = useState([]);

//   if (screenState === 0) return <GameStartScreen screenNum={screenState} />;
//   else if (screenState === 1) return <QuestionScreen questionList={questionList} questNum={Qnum} screenNum={screenState} />
//   return <GameOverScreen screenNum={screenState} />;
// }