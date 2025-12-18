import React, { useState } from "react";
import "./App.css";

interface Produto {
  id: number;
  nome: string;
  preco: string; // formato "R$ 00,00"
  quantidade: string;
}

interface ItemVenda extends Produto {
  quantidadeVenda: number;
}

export default function App() {
  const [sidebarAberta, setSidebarAberta] = useState(true);
  const [pagina, setPagina] = useState<"dashboard" | "produtos" | "vendas">("dashboard");
  const [novoProduto, setNovoProduto] = useState<Produto>({ id: 0, nome: "", preco: "R$ 0,00", quantidade: "0" });
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [mostrarTabela, setMostrarTabela] = useState(false);
  const [carrinho, setCarrinho] = useState<ItemVenda[]>([]);

  // Funções de produtos
  const criarProduto = () => {
    if (!novoProduto.nome) return alert("Digite o nome do produto!");
    const id = Date.now();
    setProdutos([...produtos, { ...novoProduto, id }]);
    setNovoProduto({ id: 0, nome: "", preco: "R$ 0,00", quantidade: "0" });
  };

  const carregarProdutos = () => setMostrarTabela(!mostrarTabela);

  const editarCampo = (id: number, campo: keyof Produto, valor: string) => {
    setProdutos(produtos.map(p => p.id === id ? { ...p, [campo]: valor } : p));
  };

  const excluirProduto = (id: number) => {
    setProdutos(produtos.filter(p => p.id !== id));
  };

  // Funções de vendas
  const adicionarAoCarrinho = (produto: Produto, qtd: number) => {
    if (qtd <= 0 || qtd > Number(produto.quantidade)) return;
    const existente = carrinho.find(i => i.id === produto.id);
    if (existente) {
      setCarrinho(carrinho.map(i => i.id === produto.id ? { ...i, quantidadeVenda: i.quantidadeVenda + qtd } : i));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidadeVenda: qtd }]);
    }
  };

  const resetarCarrinho = () => setCarrinho([]);

  const totalCarrinho = carrinho.reduce(
    (acc, i) => acc + parseFloat(i.preco.replace("R$", "").replace(",", ".")) * i.quantidadeVenda,
    0
  );

  return (
    <div className="layout">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarAberta ? "aberta" : "fechada"}`}>
        <h2>{sidebarAberta ? "Menu" : ""}</h2>
        <button title="Dashboard" onClick={() => setPagina("dashboard")}>📊</button>
        <button title="Produtos" onClick={() => setPagina("produtos")}>🛒</button>
        <button title="Vendas" onClick={() => setPagina("vendas")}>💰</button>
        <button className="toggle-sidebar" onClick={() => setSidebarAberta(!sidebarAberta)}>
          {sidebarAberta ? "⬅️" : "➡️"}
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className={`content ${sidebarAberta ? "" : "fullwidth"}`}>
        {/* DASHBOARD */}
        {pagina === "dashboard" && (
          <>
            <h1>📊 Dashboard</h1>
            <div className="dashboard-cards">
              <div className="card">Total Produtos: {produtos.length}</div>
              <div className="card">
                Estoque Total: {produtos.reduce((acc, p) => acc + Number(p.quantidade), 0)}
              </div>
              <div className="card">
                Valor Total: R$ {produtos.reduce(
                  (acc, p) => acc + parseFloat(p.preco.replace("R$", "").replace(",", ".")) * Number(p.quantidade),
                  0
                ).toFixed(2)}
              </div>
            </div>
            <h2>Últimos produtos adicionados</h2>
            <ul>
              {produtos.slice(-5).map(p => (
                <li key={p.id}>{p.nome} - {p.preco} - {p.quantidade}</li>
              ))}
            </ul>
          </>
        )}

        {/* PRODUTOS */}
        {pagina === "produtos" && (
          <>
            <div className="cadastro-produto">
              <h2>📝 Cadastrar Produto</h2>
              <div className="novo-produto-linha">
                <input
                  type="text"
                  placeholder="Nome do produto"
                  value={novoProduto.nome}
                  onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Preço (R$ 0,00)"
                  value={novoProduto.preco}
                  onChange={(e) => setNovoProduto({ ...novoProduto, preco: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Quantidade"
                  value={novoProduto.quantidade}
                  onChange={(e) => setNovoProduto({ ...novoProduto, quantidade: e.target.value })}
                />
                <button onClick={criarProduto}>➕ Criar</button>
              </div>
            </div>

            <button onClick={carregarProdutos} className="btn-mostrar">
              📋 Mostrar produtos cadastrados
            </button>

            {mostrarTabela && (
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Qtd</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <input
                          value={p.nome}
                          onChange={(e) => editarCampo(p.id, "nome", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={p.preco}
                          onChange={(e) => editarCampo(p.id, "preco", e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={p.quantidade}
                          onChange={(e) => editarCampo(p.id, "quantidade", e.target.value)}
                        />
                      </td>
                      <td className="td-acoes">
                        <button onClick={() => alert(`Produto "${p.nome}" salvo!`)}>💾</button>
                        <button
                          onClick={() => excluirProduto(p.id)}
                          style={{ background: "#c0392b" }}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {/* VENDAS */}
        {pagina === "vendas" && (
          <>
            <h1>💰 Vendas</h1>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Qtd disponível</th>
                  <th>Qtd venda</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((p) => (
                  <tr key={p.id}>
                    <td>{p.nome}</td>
                    <td>{p.preco}</td>
                    <td>{p.quantidade}</td>
                    <td>
                      <input type="number" min={1} max={Number(p.quantidade)} defaultValue={1} id={`qtd-${p.id}`} />
                    </td>
                    <td>
                      <button onClick={() => {
                        const input = document.getElementById(`qtd-${p.id}`) as HTMLInputElement;
                        adicionarAoCarrinho(p, Number(input.value));
                      }}>Adicionar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="carrinho-controles">
              <h3>Total do Carrinho: R$ {totalCarrinho.toFixed(2)}</h3>
              <button className="btn-reset" onClick={resetarCarrinho}>
                🧹 Resetar Carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
