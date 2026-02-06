import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundNoticia() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        <div className="relative w-full h-64 flex items-center justify-center bg-gray-200">
          <Image
            src="/images/404.png"
            alt="No encontrado"
            width={200}
            height={200}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">NADA QUE MOSTRAR</h1>
          <p className="text-gray-600 mb-6">La noticia que buscas no existe o ha sido eliminada.</p>
          <Link 
            href="/pagina/inicio"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            ← Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
