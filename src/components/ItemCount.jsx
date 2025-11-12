import { useState } from "react";

function ItemCount({ initial = 1 }) {
    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => setCantidad(cantidad + 1);
    const restar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    return (
        <div style={styles.container}>
            <div style={styles.controls}>
                <button onClick={restar} style={styles.btn}>-</button>
                <span style={styles.numero}>{cantidad}</span>
                <button onClick={sumar} style={styles.btn}>+</button>
            </div>

            <button style={styles.addBtn}>
                Agregar al carrito
            </button>
        </div>
    );
}

const styles = {
    container: {
        marginTop: "1.5rem",
    },
    controls: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
    },
    btn: {
        backgroundColor: "#0d0768ff",
        color: "white",
        border: "none",
        padding: "0.3rem 0.8rem",
        borderRadius: "5px",
        cursor: "pointer",
    },
    numero: {
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    addBtn: {
        backgroundColor: "green",
        color: "white",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        cursor: "pointer",
    },
};

export default ItemCount;
