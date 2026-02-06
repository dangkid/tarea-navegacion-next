import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  content: string;
  date?: string;
  imagen?: string;
  noticiaId?: string; // ID para el enlace de detalle
}

export default function Card({ title, content, date, imagen, noticiaId }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {imagen && (
        <div className="relative w-full h-48">
          <Image 
            src={imagen} 
            alt={title} 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className="p-6">
        {date && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {date}
          </span>
        )}
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{content}</p>
        {noticiaId && (
          <Link 
            href={`/noticia/${noticiaId}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Ver detalle →
          </Link>
        )}
      </div>
    </div>
  );
}
