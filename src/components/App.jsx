import React, { Component } from 'react';
import ChatContactInfos from './ChatContactInfos';
import '../styles/App.css';
import ChatMessagesContainer from './ChatMessagesContainer';

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
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <ChatContactInfos />
        <ChatMessagesContainer messages={messages} />
      </div>
    );
  }
}
