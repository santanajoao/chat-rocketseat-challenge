import React, { Component } from 'react';
import ChatContactInfos from './ChatContactInfos';
import ChatMessagesContainer from './ChatMessagesContainer';
import ChatMessageBar from './ChatMessageBar';
import '../styles/App.css';

const INITIAL_MESSAGES = [
  {
    sender: 'Cecilia',
    time: '11:30',
    message:'Tive uma ideia incrível para um projeto! 😍',
  },
  {
    sender: 'Você',
    time: '11:32',
    message: 'Sério? Me conta mais.',
  },
  {
    sender: 'Cecilia',
    time: '11:34',
    message: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
  },
  {
    sender: 'Você',
    time: '11:36',
    message: '#boraCodar! 🚀',
  },
];

export default class App extends Component {
  state = {
    messages: INITIAL_MESSAGES,
    message: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      message: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.setState(({ message, messages }) => {
      const msgInfos = {
        sender: 'Você',
        time: new Date().toLocaleTimeString().slice(0, 5),
        message,
      }
      return { messages: [...messages, msgInfos], message: '' };
    }, this.scrollToBottom);
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
