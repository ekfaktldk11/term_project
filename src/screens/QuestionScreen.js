import React, { useState } from 'react';
import axios from 'axios';
import HeaderTitle from '../components/HeaderTitle';
import SubmitButton from '../components/SubmitButton';
import Card from '../components/Card';
import '../App.css';

const QuestionScreen = props => {

    let submitEnable = <SubmitButton onClick={() => props.setQnum()} value="다음"/>;
    if(props.Qnum == 11){
        submitEnable = <SubmitButton onClick={() => props.setScreenState()} value="결과보기"/>;
    }

    let numOfQ;

    if(props.Qnum === 0 || props.Qnum === 1) numOfQ = 0; 
    else if(props.Qnum === 11) numOfQ = 11;
    else numOfQ = props.Qnum - 1;
    return (
        <div>
            <HeaderTitle>Q{props.Qnum + 1}</HeaderTitle>
                <Card>
                    <form action="http://localhost:3001/nextQuest" method='POST'>
                        {props.questionList[props.Qnum].title}<br/><br/>
                        <input className="radioBox" type='radio' name='yesNo' value='O' />O
                        <input className="radioBox" type='radio' name='yesNo' value='X' />X
                        <input type='hidden' name='idQ' value={props.questionList[numOfQ]._id}/>
                        {submitEnable}
                    </form>
                </Card>
        </div>
    )
}

export default QuestionScreen;