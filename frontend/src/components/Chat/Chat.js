import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Configuration, OpenAIApi } from "openai";

import "./Chat.css";
import axios from "axios";
const Chat = () => {
const configuration = new Configuration({
    organization: "org-FZee788mL02ULw9DVXe7MJ7F",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

  const [content, setContent] = useState("");
  const [output, setOutput] = useState("");
  const handleMessageSubmit = async () => {
    const apiKey = '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';
    const endpoint = 'https://api.chatgpt.com/v1/chat';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        message: content
      })
    });
}
  const ChatNow = async() => { 
    
    const apiKey = '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';

    const requset = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    };
    axios
      .post(`https://api.openai.com/v1/chat/completions`,requset, {
        headers:{
            'Content-Type': 'application/json',
            authorization: `Bearer ${apiKey} `
        }
      })
      .then((result) => {
        console.log(result.data.choices[0].message.content);
        setOutput(result.data.choices[0].message.content)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main-container">
      <p className="main-title">Talk to me - تحدث إلي</p>
      <div className="main-content">
        <input
          className="word-input"
          type="search"
          placeholder="Inquire about services & maintenance"
          onChange={(e)=>{
const value=e.target.value
setContent(value)
          }}
        ></input>
        <Button size="sm" className="submit-btn" onClick={ChatNow}>
          {" "}
          sibmit
        </Button>
      </div>
      <div className="reply-content ">
        <p>{output} </p>
      </div>
    </div>
  );
};

export default Chat;
