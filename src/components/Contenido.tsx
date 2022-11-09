import { Filtrar } from "./filterBar/Filtrar";
import { Paginacion } from "./Paginacion";
import {Tabla} from "./tabla/Tabla";

export const Contenido = () => {
  return (
    <div className="p-4">
      <Filtrar />
      <Tabla />
      <Paginacion />
    </div>
  );
};
