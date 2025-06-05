export function Modal() {
  return (
    <div className="bg-white ">
      <header className="flex justify-between">
        <p>---</p>
        <div>
          <h1>Bem vindo</h1>
          <p>User</p>
        </div>
      </header>
      <div className="flex">
        <aside className="bg-purple-700">
          <p>Dashboard</p>
          <p>receitas</p>
          <p>Despesas</p>
          <button>Sair</button>
        </aside>
        <div className="flex justify-between">
          <h1>Receitas</h1>
          <button className="border rounded-xl">Filtrar vendas</button>
          <button className="bg-blue-600 border border-blue-500 rounded-xl">
            Filtrar
          </button>
          <button className="border rounded-xl">Nova venda</button>
        </div>
      </div>
      <div className="flex">
        <div>
          <p className="border">Cliente</p>
          <p>Jander</p>
        </div>
        <div>
          <p className="border">Curso</p>
          <p>Fullstack</p>
        </div>
        <div>
          <p className="border">Valor</p>
          <p>2000,00</p>
        </div>
      </div>
    </div>
  );
}
