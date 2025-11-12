import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ItemCount from "./ItemCount";

function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find((p) => p.id === parseInt(id)));
            }, 700);
        });

        promesa.then((res) => setProducto(res));
    }, [id]);

    if (!producto) {
        return <p style={{ padding: "2rem" }}>Cargando producto...</p>;
    }

    return (
        <div style={{ padding: "2rem" }}>
            <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{ width: "250px", borderRadius: "10px", marginBottom: "20px" }}
            />
            <h2>{producto.nombre}</h2>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <ItemCount initial={1} />
        </div>
    );
}

export default ItemDetailContainer;

