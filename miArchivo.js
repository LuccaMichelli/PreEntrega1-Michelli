const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt ("¿Querés comprar shampoo, acondicionador o ambos?", "Ej: ambos");
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));

    switch (producto) {
        case "shampoo":
            precio = 500;
            break;
        case "acondicionador":
            precio = 700;
            break;
        case "ambos":
            precio = 1100;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
    }
    totalCompra = precio * cantidad;

    alert('Saldo a pagar $' +totalCompra)

    } while (seguirComprando)
    return producto;
}
    const totalCompra = comprarProductos();
