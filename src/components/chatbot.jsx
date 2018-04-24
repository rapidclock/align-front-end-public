import React, { Component } from 'react';

import '../containers/css/Chatbot.css'; 

import { RaisedButton } from 'material-ui';

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
  	let chatframe = this.state.collapse ? 
    <RaisedButton 
      style={{margin:"10px"}}
      onClick={this.toggle} 
      label={this.state.label}
      backgroundColor="#e11a2c"
      labelColor="#ffffff">
    </RaisedButton> : 
    <div
      style={{display:"inline-grid"}}>
      <RaisedButton 
        onClick={this.toggle} 
        label={this.state.label}
        backgroundColor="#2b313f"
        labelColor="#ffffff">
      </RaisedButton>
      <iframe
        title="ask questions"
        id="chatbot"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/huskyalignbot">
      </iframe>
    </div>;

    return (
      <div id="chatbot-div">
				{chatframe}        
      </div>
    );
  }
}

export default Chatbot;