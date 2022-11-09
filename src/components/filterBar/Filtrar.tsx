import React, { useContext } from "react";
import { MusicContext } from "../../context/Context";
import { Seleccionar } from "./Seleccionar";

export const Filtrar = () => {
  const {isLoading } = useContext(MusicContext);

  return (
    <div>
      <Seleccionar />
      <br/>
      {isLoading && (
        <div className="d-flex align-items-center">
          <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
      )}


    </div>
  );
};
