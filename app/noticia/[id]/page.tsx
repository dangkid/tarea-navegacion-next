'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';

// Datos de las noticias (simulando una API)
const noticias: { [key: string]: { titulo: string; imagen: string; texto: string } } = {
  'nueva-aula-ateca': {
    titulo: 'Nueva aula ATECA',
    imagen: '/images/noticia1.png',
    texto: 'El IES Cura Valera ha inaugurado una nueva aula de tecnología aplicada (ATECA) equipada con los últimos avances tecnológicos. Esta aula permitirá a los estudiantes acceder a herramientas de realidad virtual, impresión 3D y programación avanzada. El proyecto ha sido financiado por la Junta de Andalucía dentro del programa de modernización de centros educativos.'
  },
  'prevencion-acoso': {
    titulo: 'Prevención del acoso',
    imagen: '/images/noticia2.jpg',
    texto: 'Durante esta semana se han realizado talleres de prevención del bullying y ciberacoso dirigidos a todos los cursos de ESO. Expertos en psicología educativa han trabajado con los alumnos técnicas de resolución de conflictos y sensibilización sobre el impacto del acoso escolar. Los talleres continuarán el próximo trimestre.'
  },
  'feliz-navidad': {
    titulo: 'Feliz Navidad',
    imagen: '/images/noticia3.jpg',
    texto: 'Desde el IES Cura Valera queremos desearos unas felices fiestas navideñas y un próspero año nuevo. Agradecemos a toda la comunidad educativa su esfuerzo y dedicación durante este año. Las clases se reanudarán el 8 de enero. ¡Felices fiestas!'
  },
  'inicio-curso-2026': {
    titulo: 'Inicio de curso 2026',
    imagen: '/images/noticia1.png',
    texto: 'Comenzamos el nuevo curso escolar 2025-2026 con mucha ilusión y nuevos proyectos educativos. Este año incorporamos nuevas metodologías de aprendizaje activo y proyectos interdisciplinares. Damos la bienvenida a todos los nuevos alumnos y profesores que se incorporan a nuestra comunidad educativa.'
  },
  'actividades-extraescolares': {
    titulo: 'Actividades extraescolares',
    imagen: '/images/noticia2.jpg',
    texto: 'Ya están abiertas las inscripciones para las actividades extraescolares del segundo trimestre. Este año ofrecemos: robótica, teatro, deportes (fútbol, baloncesto, voleibol), música y club de lectura. Las inscripciones estarán abiertas hasta el 20 de enero. ¡No te quedes sin plaza!'
  }
};

export default function NoticiaDetalle() {
  const params = useParams();
  const id = params.id as string;
  
  const noticia = noticias[id];

  // Si no existe la noticia, redirigir a 404
  if (!noticia) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fadeIn">
        {/* Imagen */}
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={noticia.imagen}
            alt={noticia.titulo}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Contenido */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{noticia.titulo}</h1>
          <p className="text-gray-600 leading-relaxed mb-8">{noticia.texto}</p>
          
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
