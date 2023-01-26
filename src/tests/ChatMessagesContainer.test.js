import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../components/App';
import INITIAL_MESSAGES from '../data';

describe('chat messages container', () => {
  it('deve renderizar o um horário principal', () => {
    render(<App />);
    screen.getByText('Hoje 11:30');
  });

  it('deve renderizar as mensagens iniciais', () => {
    render(<App />);
    INITIAL_MESSAGES.forEach(({ sender, time, message }) => {
      screen.getByText(`${sender} - ${time}`);
      screen.getByText(message);
    });
  });
});
