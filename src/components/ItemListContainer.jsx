import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {

        const obtener = new Promise((resolve) => {
            setTimeout(() => {
                if (categoryId) {
                    resolve(products.filter((p) => p.categoria === categoryId));
                }
                else {
                    resolve(products);
                }

            }, 600);
        });

        obtener.then((res) => setItems(res));
    }, [categoryId]);

    return (
        <section style={styles.container}>
            <h2>{greeting}</h2>
            {categoryId && (
                <p style={{ color: "#444", marginBottom: "1rem" }}>
                    Categoría: <strong>{categoryId}</strong>
                </p>
            )}
            <div style={styles.grid}>
                {items.map((item) => (
                    <div key={item.id} style={styles.card}>
                        <img
                            src={item.imagen}
                            alt={item.nombre}
                            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
                        />

                        <h3>{item.nombre}</h3>
                        <p>Precio: ${item.precio}</p>

                        <Link to={`/item/${item.id}`} style={styles.btn}>
                            Ver detalle
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
}

const styles = {
    container: {
        padding: "2rem",
        textAlign: "center",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "1rem",
        marginTop: "1.5rem",
    },
    card: {
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "#fff",
    },
    btn: {
        marginTop: "10px",
        display: "inline-block",
        textDecoration: "none",
        backgroundColor: "#0d0768ff",
        color: "white",
        padding: "0.4rem 0.8rem",
        borderRadius: "5px",
    },
};

export default ItemListContainer;
