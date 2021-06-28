import { render, screen } from '@testing-library/react';
import MyApp from './App';
import React from 'react';
import ReactDom from 'react-dom'; 
// import ReactDom from 'react-dom'; 

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDom.render(<MyApp/>, div);
  ReactDom.unmountComponentAtNode(div);
  
  // render(<MyApp />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
