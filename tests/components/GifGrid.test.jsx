import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

  const category = 'Dragon Ball'
  test('Debe de mostrar Loading... inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    
    render( <GifGrid category={category} /> )
    expect( screen.getByText('Loading ...'))
    expect( screen.getByText( category ))

  });

  test('Debe de mostrar items cuando se carga ', () => {
    
    const gifs = [{
      id: '123456',
      title: 'Gohan',
      url: 'https://www.noseque.com/gohan.jpg'
    },
    {
      id: '456789',
      title: 'Goku',
      url: 'https://www.noseque.com/goku.jpg'
    }]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })
    
    render( <GifGrid category={category} /> )

    expect( screen.getAllByRole('img').length).toBe(2)

  });

});