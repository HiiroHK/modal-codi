import { Asidermodal } from "./componentes modal/Aside modal";
import { Headermodal } from "./componentes modal/header modal";

export function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <div className="">
        <Headermodal />
        <div className="fixed bg-white z-10 flex items-center justify-center border rounded-2xl ml-5 ">
          <Asidermodal />
          <div className="flex gap-2">
            <h1>receitas</h1>
            <button>filtrar vendas</button>
            <button>filtrar</button>
            <button>nova venda</button>
          </div>
        </div>
      </div>
    );
  }
}
