import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="font-bold text-lg mb-2">IES Cura Valera</h3>
          <p className="text-gray-300 text-sm">Huércal-Overa, Almería</p>
        </div>
        
        {/* Logos con el componente Logo */}
        <div className="flex justify-center items-center gap-8 mb-6">
          <Logo 
            imagen="/images/LogoNuevo.png" 
            enlace="https://iescuravalera.es" 
            alt="IES Cura Valera"
            width={60}
            height={60}
          />
          <Logo 
            imagen="/images/logo-junta.png" 
            enlace="https://www.juntadeandalucia.es" 
            alt="Junta de Andalucía"
            width={60}
            height={60}
          />
          <Logo 
            imagen="/images/logo-europa.png" 
            enlace="https://european-union.europa.eu" 
            alt="Unión Europea"
            width={80}
            height={50}
          />
        </div>
        
        <p className="text-gray-400 text-xs text-center">© 2026 Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
