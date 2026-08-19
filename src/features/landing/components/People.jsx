import { learningImages } from '../data/images';

export const People = () => (
  <section className="w-full py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
      <h2
        className="text-3xl md:text-4xl font-black text-white mb-2"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Hecho para aprender de verdad
      </h2>
      <p className="text-slate-400 font-medium max-w-lg mx-auto">
        Personas reales aprendiendo inglés todos los días con MundoCosmico.
      </p>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 md:gap-6 md:h-[560px]">
      <figure className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group">
        <img
          src={learningImages[0].src}
          alt={learningImages[0].alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent 60%)' }}
        />
        <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="text-white font-black text-xl md:text-2xl mb-1">{learningImages[0].title}</h3>
          <p className="text-slate-200 text-sm leading-relaxed max-w-md">{learningImages[0].caption}</p>
        </figcaption>
      </figure>

      {learningImages.slice(1).map((img) => (
        <figure key={img.src} className="relative rounded-3xl overflow-hidden group min-h-[220px]">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 55%)' }}
          />
          <figcaption className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white font-bold text-lg mb-1">{img.title}</h3>
            <p className="text-slate-200 text-xs leading-relaxed">{img.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);