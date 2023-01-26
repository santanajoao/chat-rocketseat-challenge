import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('testa as funcionalidades da aplicação', () => {
  it('deveria haver uma foto de perfil', () => {
    render(<App />);
    screen.getByRole('img', { name: 'foto de perfil' });
  });
});
