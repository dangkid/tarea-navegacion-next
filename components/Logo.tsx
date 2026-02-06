import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  imagen: string;
  enlace: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function Logo({ imagen, enlace, alt = "Logo", width = 80, height = 80 }: LogoProps) {
  return (
    <Link 
      href={enlace} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block hover:opacity-80 transition-opacity"
    >
      <Image
        src={imagen}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </Link>
  );
}
