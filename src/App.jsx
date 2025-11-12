import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi Tienda Online!" />} />

        {/* Categorías */}
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría..." />} />

        {/* Detalle del producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* 404 */}
        <Route path="*" element={<h2 style={{ padding: "2rem" }}>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;

