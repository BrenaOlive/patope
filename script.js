const imagem = document.getElementById("imagem1")
const imagem2 = document.getElementById("imagem2")
const mensagem = document.getElementById("mensagem1")
const mensagem2 = document.getElementById("mensagem2")
const titulo = document.getElementById("titulo")

imagem.addEventListener("click", () => {
  if(mensagem.style.display === "none") {
    mensagem.style.display = "block"
    mensagem2.style.display = "block"
    imagem.style.display = 'none'
    imagem2.style.display = 'block'
    titulo.style.display = 'none'
  }else{
    mensagem.style.display = "none";
    mensagem2.style.display = "none";
  }
});