import React from "react";
import Link from "next/link";
import DeleteButton from "./components/DeleteButton";
import { ToastContainer } from "react-toastify";

const DaftarBuku = async () => {
  const response = await fetch(
    "https://testcasefe2023.ignorelist.com/api/v1/data",
    {
      headers: {
        nim: 212211030,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();
  const books = data.data;

  return (
    <>
      <div className="max-w-4xl mx-auto my-10">
        <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>
        <p className="font-bold">Jumlah Buku Tersedia : {books.length} </p>
        <Link href={"/"}>
          <div className="flex gap-2 bg-blue-700 w-1/5 rounded-md shadow-lg text-white p-1 cursor-pointer my-3 ">
            <p className="text-2xl ps-2 ">+</p>
            <p className="my-auto ">Tambah buku</p>
          </div>
        </Link>
        <div className=" shadow-xl border rounded-md p-2 ">
          <h5 className="font-bold">Data Buku</h5>
          <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Judul</th>
                <th className="py-2 px-4 text-left">Deskripsi</th>
                <th className="py-2 px-4 text-left">Harga</th>
                <th className="py-2 px-4 text-left">Penulis</th>
                <th className="py-2 px-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="py-2 px-4">{book.title}</td>
                  <td className="py-2 px-4">{book.description}</td>
                  <td className="py-2 px-4">{book.price}</td>
                  <td className="py-2 px-4">{book.author}</td>
                  <td className="py-2 px-4">
                    <Link
                      href={`/${book.id}`}
                      className="bg-blue-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-blue-600"
                    >
                      Ubah
                    </Link>
                    <Link
                      href={`/detail_buku/${book.id}`}
                      className="bg-blue-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-blue-600"
                    >
                      Detail
                    </Link>
                    <DeleteButton id={book.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default DaftarBuku;
