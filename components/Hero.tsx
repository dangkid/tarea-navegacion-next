import Image from 'next/image';

export default function Hero({ title, subtitle, imagen }: { title: string; subtitle: string; imagen?: string }) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 overflow-hidden">
      {imagen && (
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <Image 
            src={imagen} 
            alt="Fondo" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-xl md:text-2xl text-blue-100">{subtitle}</p>
      </div>
    </div>
  );
}
