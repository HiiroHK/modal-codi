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
        </aside>
        <h1>Receitas</h1>
        <button>Filtrar vendas</button>
        <button>Filtrar</button>
      </div>
    </div>
  );
}
