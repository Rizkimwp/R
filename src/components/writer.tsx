import React, { useEffect, useRef } from 'react';
import { TypewriterClass } from 'typewriter-effect';

// Misalnya TypewriterClass sudah diimpor dengan benar
// import TypewriterClass from 'path-to-typewriter-class';

const Writer = () => {
  const inputRef = useRef<HTMLSpanElement>(null); // Ref untuk mengakses <span>

  useEffect(() => {
    // Pastikan inputRef.current ada (elemen sudah dirender)
    if (inputRef.current) {
      // Ambil textContent dan beri fallback jika null
      const app = inputRef.current.textContent || ''; 

      // Fungsi untuk membuat node teks kustom
      const customNodeCreator = (character: string) => {
        return document.createTextNode(character);
      };

      // Membuat instance TypewriterClass dan memberi konfigurasi
      const typewriter = new TypewriterClass(inputRef.current, {
        loop: true, // Agar animasi berulang
        delay: 75,  // Delay antara tiap karakter
        onCreateTextNode: customNodeCreator, // Fungsi untuk membuat teks node kustom
      });

      // Memulai efek ketik dengan string yang diinginkan
      typewriter
        .typeString('A simple yet powerful native javascript')
        .pauseFor(300)
        .start();

      // Cleanup: Hentikan ketikan saat komponen di-unmount
      return () => {
        if (typewriter) {
          typewriter.stop(); // Hentikan animasi ketik
        }
      };
    }
  }, []); // Efek ini hanya dijalankan sekali saat komponen di-mount

  return (
    <span
      className="bg-secondary rounded-lg text-white ml-2"
      ref={inputRef} // Menghubungkan ref ke elemen <span>
    >
      {/* Teks akan diketikkan di sini */}
    </span>
  );
};

export default Writer;
