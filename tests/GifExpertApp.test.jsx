import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

  test('Debe de agregar una nueva categoria', () => {
    
    render(<GifExpertApp />)
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'Goku' } });
    expect( input.value ).toBe('Goku');
    screen.debug()

  });
  
});