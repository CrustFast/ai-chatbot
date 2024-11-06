"use client";

import Image from "next/image";

const Image1 = () => {
  return (
    <Image
      src="/images/logo/logo-bmti.png"
      alt="Logo"
      width={24}  
      height={24} 
      className="flex-shrink-0" 
    />
  );
};

export default Image1;
