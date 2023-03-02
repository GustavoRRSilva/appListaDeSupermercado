document.querySelectorAll(".valorUnit").forEach((element) => {
  valorTotal(element.innerHTML);
});

let items = [];
let enviar = document.querySelector("input[type = submit]");
enviar.addEventListener("click", () => {
  let nome = document.querySelector("input[name=nome_produto]").value;
  let valor = document.querySelector("input[name=valor_produto]").value;
  console.log(`
    ${nome}
    ${valor}
    `);
  items.push({
    nomeProduto: nome,
    valorProduto: valor,
  });
  adicionaNoDom(document.querySelector(".lista-produtos"));
  valorTotal(Number(items[items.length - 1].valorProduto));
});


function valorTotal(valorNovo) {
  let valorTotal = document.querySelector(".valorTotal");
  valorTotal.innerHTML = Number(valorTotal.innerHTML) + Number(valorNovo);
}

function adicionaNoDom(itens) {
  itens.innerHTML += `<div class="lista-produtos-single">
  <h3 class="nomeProduto">${items[items.length - 1].nomeProduto}</h3>
  <h3 class="precoProduto">R$<span class="valorUnit">${
    items[items.length - 1].valorProduto
  }</span></h3>
</div>`;
}

