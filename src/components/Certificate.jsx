import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageModules = import.meta.glob('../assets/Certificate/*.{jpg,jpeg,png}', { eager: true });

const originalCertificates = Object.entries(imageModules).map(([path, mod]) => ({
  image: mod.default,
  title: path.split('/').pop().split('.')[0].replace(/[-_]/g, ' '),
}));

const duplicateCertificates = [...originalCertificates, ...originalCertificates];
const mid = Math.ceil(duplicateCertificates.length / 2);
const topRow = duplicateCertificates.slice(0, mid);
const bottomRow = duplicateCertificates.slice(mid);

const baseSliderSettings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 12000,
  autoplaySpeed: 0,
  cssEase: 'linear',
  autoplay: true,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
  swipe: false,
  touchMove: false,
  draggable: false,
  slidesToShow: 5,
  responsive: [
    { breakpoint: 1536, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

export default function Certificate() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section
      id="certificate"
      className="bg-gray-700 dark:bg-black text-gray-900 dark:text-white w-screen overflow-x-hidden py-10"
    >
      <div className="relative text-center mb-16">
        <div className="inline-block px-8 py-4 border-4 border-green-400 rounded-xl shadow-lg bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-600 dark:text-green-400 tracking-widest uppercase drop-shadow-md">
            My Certificates
          </h2>
          <div className="mt-2 w-full h-1 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <p className="mt-6 text-white dark:text-gray-400 text-sm max-w-xl mx-auto italic">
          These represent the hard work, learning, and milestones I’ve proudly achieved.
        </p>
      </div>

      {/* Top row - scrolls left */}
      <div className="w-screen overflow-hidden">
        <Slider {...baseSliderSettings}>
          {topRow.map((cert, i) => (
            <div key={i} className="px-2">
              <div
                onClick={() => setModalImage(cert.image)}
                className="cursor-pointer bg-gray-700 dark:bg-gray-900 border border-green-500 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover object-top rounded-t-lg"
                />
                <div className="p-3 text-center">
                  <p className="text-green-600 dark:text-green-300 text-base font-semibold capitalize tracking-wide line-clamp-1">
                    {cert.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Bottom row - scrolls right (rtl) */}
      <div className="w-screen overflow-hidden mt-8">
        <Slider {...{ ...baseSliderSettings, rtl: true }}>
          {bottomRow.map((cert, i) => (
            <div key={i} className="px-2">
              <div
                onClick={() => setModalImage(cert.image)}
                className="cursor-pointer bg-gray-700 dark:bg-gray-900 border border-green-500 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover object-top rounded-t-lg"
                />
                <div className="p-3 text-center">
                  <p className="text-green-600 dark:text-green-300 text-sm font-semibold truncate">
                    {cert.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/90 dark:bg-white/90 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Full Certificate"
            className="max-w-[90%] max-h-[90%] rounded-xl border-4 border-green-500 shadow-xl transition-transform scale-100"
          />
        </div>
      )}
    </section>
  );
}
