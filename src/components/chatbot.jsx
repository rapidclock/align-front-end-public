import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import 'css/Chatbot.css'; 

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, label: "Questions?" };
  }

  toggle() {
    let label = this.state.label === "Questions?" ? "X" : "Questions?";
    this.setState({ collapse: !this.state.collapse, label: label});
  }

  render() {
    return (
      <div id="chatbot-div">
        <Button id="chatbot-toggle" color="primary" onClick={this.toggle} style={{ marginBottom: '0rem',  }}>{this.state.label}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <iframe
                title="ask questions"
                id="chatbot"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/align-bot-test-web-demo">
              </iframe>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Chatbot;