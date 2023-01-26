import React, { Component } from 'react';
import ChatContactInfos from './ChatContactInfos';
import ChatMessagesContainer from './ChatMessagesContainer';
import ChatMessageBar from './ChatMessageBar';
import INITIAL_MESSAGES from '../data';
import '../styles/App.css';

export default class App extends Component {
  state = {
    messages: INITIAL_MESSAGES,
    message: '',
  };

  handleChange = ({ target }) => {
    this.setState({ message: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.setState(({ message, messages }) => {
      const msgInfos = {
        sender: 'Você',
        time: new Date().toLocaleTimeString().slice(0, 5),
        message,
      };
      return { messages: [...messages, msgInfos], message: '' };
    });
  };

  render() {
    const { messages, message } = this.state;
    return (
      <div className="App">
        <ChatContactInfos />
        <ChatMessagesContainer messages={messages} />
        <ChatMessageBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          message={message}
        />
      </div>
    );
  }
}
