import React from "react";
import { useContext } from "react";
import { MusicContext } from "../../context/Context";
import Form from "react-bootstrap/Form";

export const Seleccionar = () => {
  const { dataToAPI, handleNumRecords } = useContext(MusicContext);

  return (
    <div>
      <div className="fw-bold pt-2 me-2">
        <p>Registros por página</p>
      </div>

      <Form.Select
        aria-label="Default select example"
        name="selectNumRecords"
        id="selectNumRecords"
        value={dataToAPI.limit}
        onChange={handleNumRecords}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </Form.Select>
    </div>
  );
};
