import Image from 'next/image';

export default function Card({ title, content, date, imagen }: { title: string; content: string; date?: string; imagen?: string }) {
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
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
