// import React, { useState } from "react";

import Form from "./components/Form";

const UbahBuku = async ({ params }) => {
  const id = params.id;
  const response = await fetch(
    `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`,
    {
      headers: {
        nim: 212211030,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();
  console.log(data);
  const book = data.data;
  return (
    <>
      <div className="max-w-2xl mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Ubah Buku</h1>
        <Form book={book} />
      </div>
    </>
  );
};

export default UbahBuku;
