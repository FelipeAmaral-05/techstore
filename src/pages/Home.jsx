import Menu from '../components/Menu'
import Carrossel from '../components/Carrossel'
import Card from '../components/Card'
import Footer from '../components/Footer'
const produtos = [
{nome:"Notebook", descricao:"Dell Inspiron i7 16GB 512GB SSD", preco:"R$ 4.599,00",
img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"},
{nome:"Smartphone", descricao:"Samsung Galaxy 128GB 5G", preco:"R$ 2.199,00",
img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"},
{nome:"Tablet", descricao:"Samsung Tab A 10pol 64GB", preco:"R$ 1.299,00", img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"},
{nome:"Monitor", descricao:"LG 24 Full HD 144Hz IPS", preco:"R$ 899,00", img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400"},
{nome:"Teclado", descricao:"Mecanico RGB ABNT2", preco:"R$ 249,00", img:"https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=400"},
{nome:"Mouse", descricao:"Gamer 7200 DPI RGB", preco:"R$ 129,00", img:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"},
{nome:"Headset", descricao:"Gamer com microfone RGB", preco:"R$ 199,00", img:"https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400"},
{nome:"Webcam", descricao:"Full HD 1080p com microfone", preco:"R$ 179,00", img:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400"},
{nome:"Impressora", descricao:"HP Multifuncional Wi-Fi", preco:"R$ 599,00", img:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400"},
{nome:"Roteador", descricao:"TP-Link Wi-Fi 6 Dual Band", preco:"R$ 299,00", img:"https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{nome:"HD Externo", descricao:"Seagate 1TB USB 3.0", preco:"R$ 349,00", img:"https://images.unsplash.com/photo-1613070541337-b40942ee6527?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{nome:"SSD", descricao:"Kingston 480GB NVMe", preco:"R$ 279,00", img:"https://images.unsplash.com/photo-1628557118391-56cd62c9f2cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNzZHxlbnwwfHwwfHx8MA%3D%3D"},
{nome:"Pen Drive", descricao:"SanDisk 64GB USB 3.0", preco:"R$ 49,00", img:"https://images.unsplash.com/photo-1587145820098-23e484e69816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVuZHJpdmV8ZW58MHx8MHx8fDA%3D"},
{nome:"Caixa de Som", descricao:"JBL Bluetooth 20W", preco:"R$ 159,00", img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"},
{nome:"Microfone", descricao:"Condensador USB Podcast", preco:"R$ 219,00", img:"https://images.unsplash.com/photo-1521424159246-e4a66f267e4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9mb25lfGVufDB8fDB8fHww"},
{nome:"Smartwatch", descricao:"Relogio GPS Cardiaco", preco:"R$ 499,00", img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"},

]
export default function Home(){
return(
<>
<Menu/>
<Carrossel/>
<section className="produtos">
<h2>NOSSOS PRODUTOS</h2>
<div className="grid">
{produtos.map((p,i)=>
<Card key={i} nome={p.nome} descricao={p.descricao} preco={p.preco} imagem={p.img}/
>
)}
</div>
</section>
<Footer/>
</>
)
}