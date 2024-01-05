"use client";
import customRevalidatePath from "@/utils/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ book }) => {
  const [judul, setJudul] = useState(book.title);
  const [deskripsi, setDeskripsi] = useState(book.description);
  const [harga, setHarga] = useState(book.price);
  const [penulis, setPenulis] = useState(book.author);

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://testcasefe2023.ignorelist.com/api/v1/data/${book.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            nim: 212211030,
          },
          body: JSON.stringify({
            title: judul,
            description: deskripsi,
            price: harga,
            author: penulis,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success("Sukses update data", {
          position: "top-right",
        });
        customRevalidatePath("/daftar_buku");
        router.push("/daftar_buku");
      } else {
        throw new Error(data.message || "Internal server error");
      }
    } catch (error) {
      toast.error("Error", {
        position: "top-right",
      });
    }
  };
  return (
    <>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label
            htmlFor="judul"
            className="block text-sm font-medium text-gray-600"
          >
            Judul
          </label>
          <input
            type="text"
            id="judul"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deskripsi"
            className="block text-sm font-medium text-gray-600"
          >
            Deskripsi
          </label>
          <textarea
            id="deskripsi"
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="harga"
            className="block text-sm font-medium text-gray-600"
          >
            Harga
          </label>
          <input
            type="number"
            id="harga"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="penulis"
            className="block text-sm font-medium text-gray-600"
          >
            Penulis
          </label>
          <input
            type="text"
            id="penulis"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            value={penulis}
            onChange={(e) => setPenulis(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Ubah buku
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
