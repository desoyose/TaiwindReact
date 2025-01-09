import { useState } from 'react';
import closeMenu from '../assets/images/icon-menu-close.svg';
import burguerMenu from '../assets/images/icon-menu.svg';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenuHandler = () => setIsMenuOpen(false);

  return (
    <>
      {/* Botón de menú hamburguesa (visible solo en pantallas pequeñas) */}
      <img
        id="burguerMenu"
        className={`absolute right-4 w-10 h-4 cursor-pointer z-20 sm:hidden ${isMenuOpen ? 'hidden' : ''}`}
        src={burguerMenu}
        alt="Open Menu"
        onClick={openMenu}
      />

      {/* Fondo con opacidad (visible solo en pantallas pequeñas) */}
      <div
        id="back"
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 transition-opacity duration-300 ${
          isMenuOpen ? 'visible' : 'invisible opacity-0'
        } sm:hidden`}
        onClick={closeMenuHandler}
      ></div>

      {/* Navegación */}
      <nav
        className={`fixed top-0 right-0 h-full bg-Off-white z-20 w-[70%] transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:relative sm:translate-x-0 sm:transition-none sm:w-auto`}
      >
        {/* Botón de cerrar menú (solo visible en pantallas pequeñas) */}
        <img
          id="closeMenu"
          className={`absolute z-40 top-16 right-4 w-10 h-4 cursor-pointer sm:hidden ${isMenuOpen ? '' : 'hidden'}`}
          src={closeMenu}
          alt="Close Menu"
          onClick={closeMenuHandler}
        />

        {/* Lista de navegación */}
        <ul className="w-64 pt-[50%] right-0 absolute h-full sm:relative sm:flex flex-col text-[1.125rem] sm:pt-0 sm:w-[438px] bg-Off-white sm:place-content-around sm:flex-row sm:text-base sm:items-center pl-3 space-y-12 sm:space-y-0">
          <li><a href="#">Home</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categorías</a></li>
        </ul>
      </nav>
    </>
  );
};
