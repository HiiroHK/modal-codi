export function Modal() {
  return (
    <div className="bg-white rounded-2xl">
      <header className="flex justify-between">
        <p>---</p>
        <div>
          <h1>Bem vindo</h1>
          <p>User</p>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-2">
        <aside className="bg-purple-700 rounded-bl-2xl flex flex-col justify-between">
          <p>Dashboard</p>
          <p>receitas</p>
          <p>Despesas</p>
          <button>Sair</button>
        </aside>
        <div>
          <div className="flex justify-between">
            <h1>Receitas</h1>
            <button className="border rounded-xl">Filtrar vendas</button>
            <button className="bg-blue-600 border border-blue-500 rounded-xl">
              Filtrar
            </button>
            <button className="border rounded-xl">Nova venda</button>
          </div>
          <div className="border rounded-2xl p-1 flex justify-center">
            <table className="border ">
              <tr className="flex justify-center gap-10">
                <th>Cliente</th>
                <th>Curso</th>
                <th>Valor</th>
              </tr>
              <tr className="grid grid-cols-3 gap-x-3 gap-y-2">
                <td>jander</td>
                <td>fullstack</td>
                <td>2000,00</td>
                <td>Vanessa</td>
                <td>Fullstack</td>
                <td>2000,00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
