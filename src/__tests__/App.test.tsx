import '@testing-library/jest-dom';
import { render, fireEvent,screen,act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../renderer/App';

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
  it('should render text field and button', async () =>{
    render(<App/>)
    const hello =  screen.getByAltText('hello')
    const submit =  screen.getByText('Submit')
    expect(hello).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  })
});
