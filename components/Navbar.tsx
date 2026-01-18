'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image 
              src="/images/LogoNuevo.png" 
              alt="Logo IES Cura Valera" 
              width={80} 
              height={80}
              className="object-contain"
            />
            <span className="text-2xl font-bold">IES Cura Valera</span>
          </Link>
          
          {/* Botón móvil */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded hover:bg-blue-700"
          >
            <span className="text-2xl">☰</span>
          </button>

          {/* Menú desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/pagina/inicio" className="hover:text-blue-100 transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/pagina/noticias" className="hover:text-blue-100 transition-colors font-medium">
              Noticias
            </Link>
            <Link href="/pagina/oferta-educativa" className="hover:text-blue-100 transition-colors font-medium">
              Oferta Educativa
            </Link>
            <Link href="/pagina/contacto" className="hover:text-blue-100 transition-colors font-medium">
              Contacto
            </Link>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <Link href="/pagina/inicio" className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors">
              Inicio
            </Link>
            <Link href="/pagina/noticias" className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors">
              Noticias
            </Link>
            <Link href="/pagina/oferta-educativa" className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors">
              Oferta Educativa
            </Link>
            <Link href="/pagina/contacto" className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors">
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
