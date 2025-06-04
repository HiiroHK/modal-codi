import { useState } from "react";
import { Modal } from "./modal/modal";

export function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenCloseModal() {
    setOpenModal(!openModal);
  }

  return (
    <div className="bg-red-600 h-screen flex flex-col items-center justify-center">
      <h1>receitas</h1>
      <div>
        <button
          onClick={handleOpenCloseModal}
          className="flex justify-center items-center"
        >
          Abrir modal
        </button>
      </div>
      {openModal && <Modal />}
    </div>
  );
}
