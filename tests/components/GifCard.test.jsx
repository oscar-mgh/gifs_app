import { render, screen } from "@testing-library/react"
import { GifCard } from '../../src/components';

describe('Pruebas en <GifCard />', () => {

  const title = "Roku"
  const url = "https://roku.com/avatar"

  test('Debe hacer match con el snapshot ', () => {
    
    const { container } = render( <GifCard title={title} url={url} /> )
    expect( container ).toMatchSnapshot()
  
  });
  
  test('Debe de mostrar la imagen con el URL y el ALT indicado ', () => {
    
    render( <GifCard title={title} url={url} /> )
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  
  });

  test('Debe de mostrar el titulo en el componente', () => {
    
    render( <GifCard title={title} url={url} /> )
    expect(screen.getByText(title)).toBeTruthy()

  });

});