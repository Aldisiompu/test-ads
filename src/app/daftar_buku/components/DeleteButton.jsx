"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import customRevalidatePath from "@/utils/action";

const DeleteButton = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://testcasefe2023.ignorelist.com/api/v1/data/${id}`,
        {
          method: "DELETE",
          headers: {
            nim: 212211030,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success("Sukses Menghapus data", {
          position: "top-right",
        });
        customRevalidatePath("/daftar_buku");
      } else {
        throw new Error(data.message || "Internal server error");
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    } finally {
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-red-500 text-white px-2 mt-2 py-1 rounded-md hover:bg-red-600"
      >
        Hapus
      </button>

      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <p>Apakah Anda yakin ingin menghapus data ini?</p>
            <button onClick={handleDelete} className="yes-button">
              Ya
            </button>
            <button onClick={closeModal} className="no-button">
              Tidak
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;
