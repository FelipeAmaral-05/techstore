export default function Card({imagem,nome,descricao,preco}){
return(
<div className="card">
<img src={imagem} alt={nome} />
<h3>{nome}</h3>
<p>{descricao}</p>
<span className="preco">{preco}</span>
<button>Comprar</button>
</div>
)
}