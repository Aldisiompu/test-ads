"use client";

import React, { useState } from "react";

const Form = ({ book }) => {
  const [judul, setJudul] = useState(book.title);
  const [deskripsi, setDeskripsi] = useState(book.description);
  const [harga, setHarga] = useState(book.price);
  const [penulis, setPenulis] = useState(book.author);

  return (
    <>
   
      <div className="shadow-2xl py-3 px-4">
        <div className="mb-4">
          <h3 className="block text-sm font-bold text-gray-600">Judul</h3>
          <p>{judul}</p>
        </div>
        <div className="mb-4">
          <h3 className="block text-sm font-bold text-gray-600">Deskripsi</h3>
          <p>{deskripsi}</p>
        </div>
        <div className="mb-4">
          <h3 className="block text-sm font-bold text-gray-600">Harga</h3>
          <p>{harga}</p>
        </div>
        <div className="mb-4">
          <h3 className="block text-sm font-bold text-gray-600">Penulis</h3>
          <p>{penulis}</p>
        </div>
      </div>
    </>
  );
};

export default Form;
