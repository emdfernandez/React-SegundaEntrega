import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.logo}>
                Mi Tienda
            </Link>
            <ul style={styles.links}>
                <li><Link to="/category/juegos" style={styles.link}>Juegos</Link></li>
                <li><Link to="/category/consolas" style={styles.link}>Consolas</Link></li>
                <li><Link to="/category/accesorios" style={styles.link}>Accesorios</Link></li>
                <li><Link to="/category/merch" style={styles.link}>Merch</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#0d0768ff",
        color: "#fff",
    },
    logo: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "white",
        textDecoration: "none",
        cursor: "pointer"
    },
    links: {
        listStyle: "none",
        display: "flex",
        gap: "1.5rem",
    },
    link: {
        textDecoration: "none",
        color: "white",
    },
};

export default NavBar;