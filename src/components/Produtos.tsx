import { useState } from "react";

type Produto = {
  id?: number;
  nome: string;
  preco: number;
  quantidade: number;
};

const API = "http://127.0.0.1:8000/produtos/";

export default function Produtos() {
    const [abrirModal, setAbrirModal] = useState(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [mostrarTabela, setMostrarTabela] = useState(false);



  const [novoProduto, setNovoProduto] = useState<Produto>({
    nome: "",
    preco: 0,
    quantidade: 0,
  });

  const carregarProdutos = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProdutos(data);
    setMostrarTabela(true);
  };

  // 🔹 Criar produto
  const criarProduto = async () => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoProduto),
    });

    setNovoProduto({ nome: "", preco: 0, quantidade: 0 });
    carregarProdutos();
  };

  // 🔹 Editar campo
  const editarCampo = (
    id: number,
    campo: keyof Produto,
    valor: string
  ) => {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, [campo]: campo === "nome" ? valor : +valor } : p
      )
    );
  };

  // 🔹 Salvar edição
  const salvarProduto = async (produto: Produto) => {
    await fetch(`${API}${produto.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto),
    });

    carregarProdutos();
  };

  // 🔹 Excluir
  const excluirProduto = async (id: number) => {
    if (!confirm("Deseja excluir este produto?")) return;

    await fetch(`${API}${id}`, {
      method: "DELETE",
    });

    carregarProdutos();
  };

  return (
    <>
      <h1>📦 Produtos</h1>

      {/* 🔹 CRIAR */}
      <div className="novo-produto">
        <input
          placeholder="Nome"
          value={novoProduto.nome}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, nome: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, preco: +e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Quantidade"
          value={novoProduto.quantidade}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, quantidade: +e.target.value })
          }
        />

        <button onClick={criarProduto}>➕ Criar</button>
      </div>

      {/* 🔹 BOTÃO MOSTRAR */}
      <button
    onClick={carregarProdutos}
    className="btn-mostrar"
>
     📋 Mostrar produtos cadastrados
    </button>



      {/* 🔹 TABELA */}
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
                    onChange={(e) =>
                      editarCampo(p.id!, "nome", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={p.preco}
                    onChange={(e) =>
                      editarCampo(p.id!, "preco", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={p.quantidade}
                    onChange={(e) =>
                      editarCampo(p.id!, "quantidade", e.target.value)
                    }
                  />
                </td>

                <td>
                  <button onClick={() => salvarProduto(p)}>💾</button>
                  <button
                    onClick={() => excluirProduto(p.id!)}
                    style={{ background: "#c0392b", marginLeft: 5 }}
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
  );
}
