import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageCard from './MessageCard';
import '../styles/ChatMessagesContainer.css';

export default class ChatMessagesContainer extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="ChatMessagesContainer">
        <span className="chat-general-time">Hoje 11:30</span>
        <ul className="message-list">
          { messages.map((messageInfos, index) => (
            <li key={index}>
              <MessageCard {...messageInfos} />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

ChatMessagesContainer.propTypes = {
  messages: PropTypes.string.isRequired,
};
