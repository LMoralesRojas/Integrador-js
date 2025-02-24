import { handleRenderList } from "../vistas/tienda";
import { handleGetProductLocalStorage } from "./persistence/persitence";

export const handleSearchProductByName = () => {
  const inputHeader = document.getElementById("inputHeader");
  const products = handleGetProductLocalStorage();
  const result = products.filter((el) =>
    el.nombre.toLowerCase().includes(inputHeader.value)
  );
  handleRenderList(result);
};
