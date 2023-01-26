import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

describe('testas as funcionalidades da aplicação', () => {
  it('é possível digitar no input', () => {
    render(<App />);

    const msgBar = screen.getByPlaceholderText('Digite sua mensagem');
    expect(msgBar).toHaveValue('');

    const msg = 'Olá!';
    userEvent.type(msgBar, msg);
    expect(msgBar).toHaveValue(msg);
  });

  it('ao enviar a mensagem é renderizada no chat', () => {
    render(<App />);
    
    const msg = 'Uma mensagem bem única aqui!';
    userEvent.type(screen.getByPlaceholderText('Digite sua mensagem'), msg);
    userEvent.click(screen.getByRole('button', {
      name: 'Ícone mandar mensagem',
    }));
    const time = new Date().toLocaleTimeString().slice(0, 5);
    screen.getByText(`Você - ${time}`);
    screen.getByText(msg);
  });
});
