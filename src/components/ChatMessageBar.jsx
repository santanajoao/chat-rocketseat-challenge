import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sendMsgIcon from '../assets/send-msg-icon.svg';
import '../styles/ChatMessageBar.css';

export default class ChatMessageBar extends Component {
  render() {
    const { message, onChange, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit} className="ChatMessageBar">
        <textarea
          value={message}
          type="text"
          rows="1"
          placeholder="Digite sua mensagem"
          onChange={onChange}
          className="message-textarea"
        />
        <button
          type="submit"
          disabled={!message.length}
          className="send-msg-btn"
        >
          <img
            src={sendMsgIcon}
            className="send-msg-icon"
            alt="Ícone mandar mensagem"
          />
        </button>
      </form>
    );
  }
}

ChatMessageBar.propTypes = {
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
