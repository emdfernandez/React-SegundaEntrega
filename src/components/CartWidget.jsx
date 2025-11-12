import { FaShoppingCart } from "react-icons/fa";
function CartWidget() {
    return (
        <div style={styles.widget}>
            <FaShoppingCart color="white" size={20} />
            <span style={styles.counter}>3</span>
        </div>
    );
}

const styles = {
    widget: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: "#444",
        padding: "0.5rem 1rem",
        borderRadius: "10px",
    },
    counter: {
        position: "absolute",
        top: "15px",
        right: "40px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        width: "18px",
        height: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        fontWeight: "bold",

    },
};

export default CartWidget;