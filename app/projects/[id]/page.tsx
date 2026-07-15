'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { projectsData } from '@/const/const';

export default function ProjectDetails() {
  const params = useParams();
  const id = params?.id as string;
  const project = projectsData[id];

  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Նախագիծը չի գտնվել</h1>
        <Link href="/" className="px-6 py-2.5 bg-[#580000] text-white rounded-lg hover:bg-[#400000]">
          Վերադառնալ Գլխավոր Էջ
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Նավիգացիա */}
      <nav className="border-b border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-sm font-bold text-gray-500 hover:text-[#580000] transition-colors flex items-center gap-2">
            ← Վերադառնալ Գլխավոր էջ
          </Link>
          <span className="text-xs uppercase font-bold tracking-wider text-[#580000] bg-[#580000]/5 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </nav>

      {/* Հիմնական բովանդակություն */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Ձախ կողմ՝ Նկարների սլայդեր (Gallery) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-gray-100 bg-gray-50 relative group">
              <img 
                src={project.images[activeImage]} 
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            
            {/* Փոքր նկարների ցանկը (Thumbnails) */}
            <div className="flex gap-4">
              {project.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImage === index ? 'border-[#580000]' : 'border-transparent opacity-60'}`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Աջ կողմ՝ Մանրամասն տեղեկություն */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight">
                {project.title}
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                {project.category}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-950">Նախագծի մասին</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {project.fullStory}
              </p>
            </div>

            {/* Հիմնական հնարավորությունները */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-950">Առանձնահատկությունները</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#580000] mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Տեխնոլոգիաներ */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Օգտագործված Տեխնոլոգիաներ</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-md text-xs font-semibold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Գնալ Կայք կոճակ */}
            <div className="pt-6">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full py-4 bg-[#580000] text-white text-center font-semibold rounded-lg hover:bg-[#400000] transition-all shadow-lg shadow-[#580000]/10"
              >
                Այցելել Կայքը 
              </a>
            </div>

          </div>

        </div>
      </main>

      {/* Փոքր ֆուտեր */}
      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400 mt-20">
        <p>© {new Date().getFullYear()} Լիլիթ Բարեղամյան</p>
      </footer>

    </div>
  );
}