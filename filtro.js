document.querySelector("#filtro").addEventListener("input", () => {
   let texto = document.querySelector("#filtro").value;
   console.log(texto);
   var procura = new RegExp(texto,"i")
   let nomesProdutos = document.querySelectorAll(".nomeProduto");
   nomesProdutos.forEach(element => {
    if(!procura.test(element.innerHTML)){
        element.parentNode.style.display = "none"
    }
    else{
        element.parentNode.style.display = "flex"
    }
   });
});
