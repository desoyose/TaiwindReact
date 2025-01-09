import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/fonts.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const hamurguerMenu = document.querySelector('#burguerMenu');

hamurguerMenu.addEventListener('click' , () =>{
  console.log('Hola')
} )