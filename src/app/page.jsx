"use client";
import customRevalidatePath from "@/utils/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TambahBuku = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");
  const [penulis, setPenulis] = useState("");
  const [judulError, setJudulError] = useState("");
  const [deskripsiError, setDeskripsiError] = useState("");
  const [hargaError, setHargaError] = useState("");
  const [penulisError, setPenulisError] = useState("");

  const router = useRouter();

  const handleTambahBuku = async (e) => {
    e.preventDefault();

    if (!judul.trim()) {
      setJudulError("Judul wajib diisi");
      return;
    } else {
      setJudulError("");
    }

    if (!deskripsi.trim()) {
      setDeskripsiError("Deskripsi wajib diisi");
      return;
    } else {
      setDeskripsiError("");
    }

    if (!harga.trim()) {
      setHargaError("Harga wajib diisi");
      return;
    } else {
      setHargaError("");
    }

    if (!penulis.trim()) {
      setPenulisError("Penulis wajib diisi");
      return;
    } else {
      setPenulisError("");
    }

    try {
      const response = await fetch(
        "https://testcasefe2023.ignorelist.com/api/v1/data",
        {
          method: "POST",
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
        toast.success("Sukses menambahkan data", {
          position: "top-right",
        });
        customRevalidatePath("/daftar_buku");
        router.push("/daftar_buku");
      } else {
        throw new Error(data.message || "Internal server error");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="max-w-2xl mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Tambah Buku</h1>
        <form onSubmit={handleTambahBuku}>
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
              className={`mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 ${
                judulError && "border-red-500"
              }`}
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
            {judulError && <p className="text-red-500 text-sm">{judulError}</p>}
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
              className={`mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 ${
                deskripsiError && "border-red-500"
              }`}
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
            />
            {deskripsiError && (
              <p className="text-red-500 text-sm">{deskripsiError}</p>
            )}
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
              className={`mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 ${
                hargaError && "border-red-500"
              }`}
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
            {hargaError && <p className="text-red-500 text-sm">{hargaError}</p>}
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
              className={`mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 ${
                penulisError && "border-red-500"
              }`}
              value={penulis}
              onChange={(e) => setPenulis(e.target.value)}
            />
            {penulisError && (
              <p className="text-red-500 text-sm">{penulisError}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Tambah Buku
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default TambahBuku;
