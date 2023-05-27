import { render, screen } from '@testing-library/react';
import App from './App';

test('teste titulo', () => {
  render(<App />);
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/meu painel de controle/i);
});


test('teste titulo 2'), () => {
  render(<App />);
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/teste erro/i);
});


test('teste botao', () => {
  render(<App />);
  const button = screen.getByText('Clique aqui');
  expect(button).toBeInTheDocument();
});

