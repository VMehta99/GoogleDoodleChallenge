import axios from "axios";
import React, { useState, useEffect } from "react";
import Option from "../option/option";
import './gamecontainer.css'
export default function GameContainer() {
  const [streak, setStreak] = useState(0);
  const [imgData, setImgData] = useState(null);
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAnswer,setShowAnswer] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  function getImage() {
    setShowAnswer(false);
    setLoading(true);
    
    axios.get('/image').then(serviceData => {
      setLoading(false);
      setData(serviceData);

    }).catch(error => {
      setLoading(false);
      setError(error);
    });
  }

  function checkAnswer(option){
    if(option === correctAnswer){
      setStreak(streak+1);
      getImage();
    } else {
      setStreak(0);
      setShowAnswer(true);
    }
  }

  function setData(serviceData){
    setImgData(serviceData.data.imgUrl);
    setCorrectAnswer(serviceData.data.title);
    setOptions(serviceData.data.options)
  }

  return (
    <div className="gameContainer">
      <div className="streakCounter">
        {streak} 🔥
      </div>
      <div className="title">
        GoogleDoodle Challenge
        <br></br>
        <a href="https://github.com/VMehta99/" className="subTitle">@vmehta99</a>
      </div>
      {
        loading &&
        <h1> loading... </h1>
      }
      <div className="doodle">
        {
          showAnswer && <h1 className="correctAnswer">{correctAnswer}</h1>
        }

        {
          !loading &&
          <img alt="googleDoodle" src={imgData} />
        }
      </div>
      <div className="optionsGrid">
          {
            !loading && options.map((option, i)=>{
              return <Option key={i} onClick={()=>checkAnswer(option)} text={option}></Option>
            })
          }
      </div>
    </div>

  )

}