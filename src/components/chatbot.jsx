import React, { Component } from 'react';

import 'css/Chatbot.css'; 

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true, label: "Questions?" };
  }

  toggle() {
    let label = this.state.label === "Questions?" ? "Hide" : "Questions?";
    this.setState({ collapse: !this.state.collapse, label: label});
  }

  render() {
  	let chatframe = this.state.collapse ? null : 
  	(
  		<iframe
        title="ask questions"
        id="chatbot"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/align-bot-test-web-demo">
      </iframe>
    );

    return (
      <div id="chatbot-div">
        <button id="chatbot-toggle" color="primary" onClick={this.toggle}>{this.state.label}</button>
				{chatframe}        
      </div>
    );
  }
}

export default Chatbot;