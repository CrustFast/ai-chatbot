"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import React from 'react';

const Hero = () => {
  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "BBPPMPV BMTI" },
    { text: "Chatbot", className: "text-blue-500 dark:text-blue-500" },
  ];

  const placeholders = [
    "Bagaimana cara mengecek jadwal diklat?",
    "Bagaimana cara saya mengajukan permintaan kunjungan industri?",
    "Ada berapa jenis diklat di BMTI?",
    "Fasilitas apa saja yang ada di BMTI?",
    "Kapan lembaga BMTI didirikan?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div style={{ backgroundColor: "#171616" }} className="flex flex-col items-center justify-center h-screen">
      <TypewriterEffectSmooth words={words} className="text-2xl font-semibold mb-10" cursorClassName="bg-blue-500" />
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Hero;
