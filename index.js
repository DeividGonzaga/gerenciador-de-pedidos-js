const pedidos = [
  {
    id: 1,
    cliente: "João",
    produto: "Notebook",
    valor: 3500,
    status: "pendente"
  },
    {
    id: 2,
    cliente: "Maria",
    produto: "Mouse",
    valor: 150,
    status: "concluido"
  },
    {
    id: 3,
    cliente: "Pedro",
    produto: "Teclado",
    valor: 250,
    status: "pendente"
  },
    {
    id: 4,
    cliente: "Ana",
    produto: "Monitor",
    valor: 1200,
    status: "concluido"
  },
    {
    id: 5,
    cliente: "Carlos",
    produto: "Headset",
    valor: 400,
    status: "pendente"
  }
]
console.log("Pedidos = ", pedidos)

const pedidosListados = pedidos.map((pedido) => { 
  return { Cliente: pedido.cliente,
           Produto: pedido.produto,
           Valor: pedido.valor
          }
})
console.log("Pedidos Listados: ",pedidosListados)

//Buscar um pedido
function buscarPedidos(id){  
  
    if(typeof(id) === "number"){
      const encontrarPedidos = pedidos.find((pedido) => pedido.id === id)
      if(encontrarPedidos){
        return encontrarPedidos
      } else {
        throw new Error("Este pedido não existe!")
      }
    } else if(typeof(id) !== "number"){
        throw new Error("ID inválido! Informe um número.")
      }
  }
try {
  console.log(buscarPedidos(3))
}catch(erro){
  console.log(erro.message)
}

//Filtrar pedidos pendentes
function filtrarPedidosPendentes(){
  const pedidosPendentes = pedidos.filter((pedido) => pedido.status === "pendente")
  return pedidosPendentes
}
console.log(filtrarPedidosPendentes())

//Calcular o valor total dos pedidos pendentes
function calcularTotalPendente(pedidosPendentes){
  const total = pedidosPendentes.reduce((total, valor) => {
    return total + valor.valor
  },0)

  return total
}
console.log(calcularTotalPendente(filtrarPedidosPendentes()))

//Consulta assíncrona
//trabalhar com async/await e Promise.
function consultarPedidos(pedido){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pedido) 
    },2000)
})}

async function executarConsulta(funcao){
  try{
    const executar = await funcao(pedidos)
    if(executar.length > 0){
    console.log(executar)
    }else{
      throw new Error("Nao contem nenhum pedido")
    }
  }catch(erro){
    console.log(erro.message)
  }
}
executarConsulta(consultarPedidos)