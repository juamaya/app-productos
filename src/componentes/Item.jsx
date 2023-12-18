 

const Item = ({producto}) => {
  return (
    <div>
         <h2>ID:  {producto.id}</h2>
        <img src={producto.image} alt={producto.name}/>
        <h3>NAME: <p>{producto.name}</p> </h3>
        <h3>Stock:<p> {producto.stock} Unidades.</p> </h3>
        <h3>Precio: <p>{producto.precio}</p></h3>
        <h3>Descripcion: <p>{producto.descripcion}</p></h3>
        <hr />

    </div>
  )
}

export default Item