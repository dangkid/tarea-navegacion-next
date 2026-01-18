import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center bg-white p-12 rounded-xl shadow-xl max-w-md">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Página no encontrada</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Esta sección no existe.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
