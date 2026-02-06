import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default async function PaginaDinamica({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const rutasValidas = ['inicio', 'noticias', 'oferta-educativa', 'contacto'];
  if (!rutasValidas.includes(slug)) {
    notFound();
  }

  if (slug === 'inicio') {
    return (
      <div className="bg-gray-50">
        <Hero 
          title="Bienvenido" 
          subtitle="IES Cura Valera" 
          imagen="/images/hero-inicio.jpg"
        />
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Nuestro Centro</h2>
          <p className="text-lg text-gray-600 mb-8">El IES Cura Valera es un centro educativo de referencia en Huércal-Overa.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              title="Nueva aula ATECA" 
              content="El centro estrena un aula de tecnología aplicada."
              imagen="/images/noticia1.png"
              noticiaId="nueva-aula-ateca"
            />
            <Card 
              title="Prevención del acoso" 
              content="Taller contra el bullying y ciberacoso."
              imagen="/images/noticia2.jpg"
              noticiaId="prevencion-acoso"
            />
            <Card 
              title="Feliz Navidad" 
              content="Felices fiestas y próspero año nuevo."
              imagen="/images/noticia3.jpg"
              noticiaId="feliz-navidad"
            />
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'noticias') {
    return (
      <div className="bg-gray-50">
        <Hero 
          title="Noticias" 
          subtitle="Últimas novedades del centro"
          imagen="/images/hero-inicio.jpg"
        />
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="Inicio de curso 2026" 
              content="Comenzamos el nuevo curso con ilusión y nuevos proyectos educativos."
              date="15 Enero 2026"
              imagen="/images/noticia1.png"
              noticiaId="inicio-curso-2026"
            />
            <Card 
              title="Actividades extraescolares" 
              content="Inscripciones abiertas para actividades del trimestre."
              date="10 Enero 2026"
              imagen="/images/noticia2.jpg"
              noticiaId="actividades-extraescolares"
            />
            <Card 
              title="Feliz Navidad" 
              content="El IES Cura Valera les desea felices fiestas."
              date="24 Diciembre 2025"
              imagen="/images/noticia3.jpg"
              noticiaId="feliz-navidad"
            />
            <Card 
              title="Noticia eliminada" 
              content="Esta noticia ya no está disponible en el sistema."
              date="01 Enero 2025"
              imagen="/images/404.png"
              noticiaId="noticia-inexistente"
            />
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'oferta-educativa') {
    return (
      <div className="bg-gray-50">
        <Hero 
          title="Oferta Educativa" 
          subtitle="Programas formativos" 
          imagen="/images/hero-inicio.jpg"
        />
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-6">
            <Card 
              title="ESO" 
              content="Educación Secundaria Obligatoria de 1º a 4º curso."
            />
            <Card 
              title="Bachillerato" 
              content="Bachillerato de Ciencias y Humanidades con preparación para la universidad."
            />
            <Card 
              title="Formación Profesional" 
              content="Ciclos formativos de grado medio y superior en diferentes especialidades."
            />
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'contacto') {
    return (
      <div className="bg-gray-50">
        <Hero 
          title="Contacto" 
          subtitle="Estamos aquí para ayudarte" 
          imagen="/images/hero-inicio.jpg"
        />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Información de Contacto</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-700">Dirección:</p>
                <p className="text-gray-600">Avda. Guillermo Reyna, 35</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Ciudad:</p>
                <p className="text-gray-600">04600 Huércal-Overa, Almería</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Email:</p>
                <p className="text-gray-600">04002714.edu@juntadeandalucia.es</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
