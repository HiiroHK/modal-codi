import { Asidermodal } from "./componentes modal/Aside modal";
import { Headermodal } from "./componentes modal/Header Modal";
import { Tabela } from "./componentes modal/tabela";

export function Modal(isOpen) {
  if (isOpen) {
    return (
      <div>
        <div className="fixed bg-white z-10 items-center justify-center border rounded-2xl ml-5 ">
          <Headermodal />
          <div className="flex">
            <Asidermodal />
            <div className="flex gap-2">
              <div className="flex">
                <h1>receitas</h1>
                <button className="border rounded-2xl">filtrar vendas</button>
                <button className="border rounded-2xl">filtrar</button>
              </div>
              <button className="border rounded-2xl">nova venda</button>
            </div>
          </div>
          <Tabela />
        </div>
      </div>
    );
  }
}
