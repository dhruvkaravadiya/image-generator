/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Inputs from "./Inputs";
import "./index.css";
function App() {

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const Key = process.env.REACT_APP_API_KEY;
  console.log(Key)
  const openai =  new OpenAIApi(configuration);

  const generateImage = async () =>{
    const imageParameters = {
      prompt:userPrompt,
      n: 1,
      size:"256x256",
    };
  const response = await openai.createImage(imageParameters);
  const urlData = response.data.data[0].url;
  setImageUrl(urlData);
  };
  const [userPrompt , setUsePrompt] = useState("");

  const [imageUrl , setImageUrl] = useState("");

  return (
    <>
      <div class = "app-main-div">
        <h1 class="app-header">Generate Image using OpenAI API</h1>
        
        <div class="generate-image">
            <Inputs class="app-input"  setAttribute={setUsePrompt}/>
            <button class="app-btn" onClick={generateImage}>Generate</button>
        </div>
        {(imageUrl && <img src ={imageUrl} class="app-img" alt="url"/>) 
          ?
        imageUrl && <img src ={imageUrl} class="app-img" alt="url"/>
          :
          "LoaDING"}
      </div>
    </>
  );
}

export default App;

