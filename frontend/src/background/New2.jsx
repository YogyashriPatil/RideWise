import React, { useEffect, useState } from 'react';
import { Bike, Wind, Zap, MapPin } from 'lucide-react';

export default function New2() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const bikes = [
    { delay: 0, duration: 25, top: '15%', scale: 1.2 },
    { delay: 8, duration: 30, top: '45%', scale: 0.8 },
    { delay: 15, duration: 28, top: '75%', scale: 1 },
    { delay: 20, duration: 35, top: '30%', scale: 0.9 },
  ];

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-500/20 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      {/* Dynamic radial gradient following mouse */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.8) 0%, rgba(168,85,247,0.4) 50%, transparent 70%)',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Road lines */}
      <div className="absolute inset-0 flex justify-around items-center opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"
            style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3s' }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-orange-400/40 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Animated bikes */}
      {bikes.map((bike, idx) => (
        <div
          key={idx}
          className="absolute left-0 animate-bike-ride"
          style={{
            top: bike.top,
            animationDelay: `${bike.delay}s`,
            animationDuration: `${bike.duration}s`,
            transform: `scale(${bike.scale})`,
          }}
        >
          <Bike className="w-16 h-16 text-orange-500 drop-shadow-2xl" strokeWidth={1.5} />
          <div className="absolute -right-8 top-1/2 -translate-y-1/2">
            <Wind className="w-8 h-8 text-orange-300/50 animate-pulse" />
          </div>
        </div>
      ))}

      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-speed-line"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/30 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '1s' }} />

      {/* Main content area */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Custom Logo */}
        <div className="mb-8 relative">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-20 rotate-[-30deg] text-white">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 122.88 82.71">
                  <g><path d="M50.7,36.7l-0.16-0.68c-2.39,0.65-4.79,0.86-7.21,0.78c-2.76-0.09-5.52-0.56-8.28-1.19 c-1.35-0.31-2.53-0.64-3.65-0.96c-2.52-0.71-4.74-1.33-7.8-1.36c-0.03,0-0.05,0-0.08,0l0,0l-11.07-0.94l-2.18,3.14 c6.36,2.46,14.26,4.18,21.86,4.85c7.17,0.63,14.04,0.34,19.05-1.14L50.7,36.7L50.7,36.7z M104.65,46.26 c10.07,0,18.23,8.16,18.23,18.23c0,10.07-8.16,18.23-18.23,18.23c-10.07,0-18.23-8.16-18.23-18.23c0-6.08,2.97-11.46,7.54-14.77 l-5.29-10.4l-9.71,29.2h-4.29c0,0.12,0,0.24-0.02,0.35c-0.36,1.98-0.97,3.58-1.83,4.78c-0.96,1.34-2.21,2.2-3.76,2.57 c-1.89,0.45-7.19-0.4-10.65-0.95c-0.92-0.15-1.71-0.27-2.22-0.34l-11.41-1.53l-0.05,0.18c-0.27,1.08-1.32,1.79-2.44,1.61 l-7.08-1.16c-0.76,1.2-1.66,2.3-2.67,3.29c-3.35,3.28-7.99,5.31-13.1,5.31c-5.11,0-9.74-2.03-13.1-5.31 c-3.36-3.29-5.44-7.83-5.44-12.84c0-5.01,2.08-9.55,5.44-12.84c3.35-3.28,7.99-5.31,13.1-5.31c5.11,0,9.74,2.03,13.1,5.31 c3.36,3.29,5.44,7.83,5.44,12.84c0,0.56-0.03,1.11-0.08,1.65l6.17,1.71c1.06,0.29,1.72,1.34,1.56,2.4l10.97,1.47 c0.57,0.08,1.37,0.2,2.31,0.35c3.2,0.51,8.11,1.29,9.4,0.99c0.76-0.18,1.38-0.62,1.87-1.3c0.56-0.78,0.97-1.87,1.24-3.25H45.37 C37.45,41.52,17.65,37.82,6.29,47.48L0,47.4c1.88-4.56,6.3-7.52,11.67-9.11c-1.19-0.41-2.33-0.84-3.43-1.3 c-0.09-0.03-0.17-0.07-0.25-0.13c-0.49-0.34-0.61-1.01-0.27-1.5l3.29-4.74c0.21-0.32,0.59-0.52,1-0.49l11.69,0.99v0 c3.33,0.05,5.65,0.7,8.29,1.44c1.1,0.31,2.26,0.63,3.55,0.93c2.64,0.61,5.27,1.06,7.86,1.14c2.49,0.08,4.97-0.17,7.42-0.96 c0.8-0.71,1.61-1.39,2.45-2.04c0.87-0.68,1.79-1.34,2.77-1.99c2.61-1.74,5.29-3.13,8.12-4.08c2.85-0.95,5.84-1.45,9.07-1.39 c1.99,0.04,3.92,0.34,5.75,0.97c1.26,0.44,2.48,1.03,3.64,1.79c0.01-0.2,0.08-0.4,0.2-0.56l-5.77-4.33h-9.02 c-1.05,0-1.89-0.85-1.89-1.89c0-1.05,0.85-1.89,1.89-1.89h8.31v-7.54h0.01l0-0.04c0.01-0.25,0-0.48-0.03-0.68 c-0.02-0.17-0.06-0.33-0.11-0.49c-0.16-0.49-0.5-0.7-0.96-0.98c-0.03-0.01-0.05-0.03-0.08-0.04c-0.05-0.03-0.1-0.06-0.22-0.13 l-0.08,1.3c-0.05,0.77-0.71,1.36-1.49,1.31c-0.77-0.05-1.36-0.71-1.31-1.49l0.52-8.19c0.05-0.77,0.71-1.36,1.49-1.31 c0.77,0.05,1.36,0.71,1.31,1.49l-0.24,3.73l1.05,0.64l0.39,0.23c0.03,0.01,0.05,0.03,0.07,0.05c1,0.58,1.73,1.04,2.22,2.53 c0.1,0.3,0.17,0.63,0.22,1c0.04,0.33,0.06,0.69,0.05,1.07h0v8.19l3.66,2.74l0.33-0.38l-0.86-0.62c-0.48-0.35-0.59-1.03-0.24-1.51 c0.03-0.04,0.06-0.08,0.09-0.11l3.37-3.93c0.39-0.45,1.07-0.51,1.52-0.12l0.02,0.02l3.15,2.59c0.46,0.38,0.53,1.06,0.15,1.52 l-0.02,0.03h0l-3.29,3.75c-0.13,0.15-0.29,0.25-0.46,0.31l0,0l-1.17,0.4l1.07,0.8l0.03,0.03l0.32-0.16 c0.53-0.26,1.18-0.04,1.45,0.49l0.02,0.03l1.54,2.94c0.74-1.66,2.39-2.8,3.83-3.8c0.3-0.21,0.6-0.42,0.86-0.61 c1.13-0.84,2.18-1.38,3.13-1.62c1.05-0.27,2-0.19,2.81,0.21c0.81,0.41,1.44,1.12,1.85,2.13c0.37,0.91,0.57,2.06,0.57,3.44v3.98 c0,0.05,0,0.11-0.01,0.16c-0.11,1.76-0.51,3.03-1.14,3.89c-0.39,0.53-0.85,0.9-1.38,1.14c-0.53,0.24-1.1,0.33-1.7,0.3 c-1.29-0.07-2.74-0.74-4.24-1.85l-1.15-0.85l6.79,12.58C101.51,46.46,103.06,46.26,104.65,46.26L104.65,46.26z M95.81,48.54 c0.69-0.39,1.41-0.73,2.16-1.02L86.95,26.9c-0.03,0.05-0.06,0.1-0.1,0.15c-0.45,0.28-1.01,0.63-1.55,0.75L95.81,48.54L95.81,48.54z M12.84,59.22l4.52,1.25c0.33-0.16,0.67-0.28,1.04-0.36l0.28-7.2l-0.05,0l-0.09,0.01c-0.08,0.01-0.16,0.01-0.24,0.02l-0.03,0 l-0.01,0c-0.09,0.01-0.17,0.02-0.26,0.03l-0.09,0.01c-0.06,0.01-0.12,0.02-0.17,0.02l-0.1,0.02c-0.06,0.01-0.12,0.02-0.17,0.03 l-0.09,0.02c-0.07,0.01-0.14,0.03-0.21,0.04l-0.05,0.01c-0.09,0.02-0.17,0.04-0.26,0.06l-0.08,0.02c-0.06,0.01-0.12,0.03-0.18,0.04 l-0.1,0.03l-0.17,0.05l-0.09,0.02c-0.07,0.02-0.14,0.04-0.2,0.06l-0.05,0.01c-0.08,0.03-0.16,0.05-0.24,0.08l-0.09,0.03 c-0.05,0.02-0.11,0.04-0.16,0.06l-0.1,0.04l-
        
        <div className="flex gap-6 flex-wrap justify-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
            <span className="relative z-10 flex items-center gap-2">
              <Bike className="w-5 h-5" />
              Browse Bikes
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Find Location
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl">
          {[
            { icon: Bike, title: 'Premium Fleet', desc: '50+ bikes available' },
            { icon: Zap, title: 'Instant Booking', desc: 'Book in seconds' },
            { icon: MapPin, title: 'Multiple Locations', desc: 'Across the city' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-orange-500/50"
            >
              <feature.icon className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bike-ride {
          0% {
            transform: translateX(-100px) translateY(0) scale(var(--scale, 1));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-20px) scale(var(--scale, 1));
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes speed-line {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-bike-ride {
          animation: bike-ride linear infinite;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-speed-line {
          animation: speed-line linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}