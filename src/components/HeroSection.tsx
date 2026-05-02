import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/36ad35e7-273c-457f-8e6a-6713eb23bf33/files/40dc8c24-0762-4a9e-93c3-faf4a94fc606.jpg',
  'https://cdn.poehali.dev/projects/36ad35e7-273c-457f-8e6a-6713eb23bf33/files/b5f7abd0-3435-4c70-9838-697d0732d081.jpg',
  'https://cdn.poehali.dev/projects/36ad35e7-273c-457f-8e6a-6713eb23bf33/files/6caf2b74-ad52-4c71-b838-95cda8de293f.jpg',
  'https://cdn.poehali.dev/projects/36ad35e7-273c-457f-8e6a-6713eb23bf33/files/04fd0f7a-c960-456d-bf43-81994f3ff9bb.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                    М
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">МонтажПро</p>
                    <p className="text-sm text-white/70">Производство и монтаж</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                    Производство.<br />Монтаж.<br />Результат.
                  </p>
                  <p className="text-lg font-light text-white/80 md:text-xl max-w-md">
                    Реализуем проекты любой сложности — от изготовления до финального монтажа под ключ
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    <span className="text-sm text-white/90">Изготовление</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                    <span className="text-sm text-white/90">Монтаж</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                    <span className="text-sm text-white/90">Сдача под ключ</span>
                  </div>
                </div>
                <button className="mt-2 rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-400 hover:shadow-orange-500/30">
                  Обсудить проект
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}