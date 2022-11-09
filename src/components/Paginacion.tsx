import { useContext } from "react";
import { MusicContext } from "../context/Context";
import Form from 'react-bootstrap/Form';

export const Paginacion = () => {
  const { totalRegisters, dataToAPI, currentPage, handleChangePage } = useContext(
    MusicContext
  );


  const renderOptions = () => {
    const pages = [];
    for (let index = 0; index < totalRegisters / dataToAPI.limit; index++) {
      pages.push(index);
      
    }
    return pages;
  };

  return (
    <div className="d-flex justify-content-end align-items-center">
      <p className=" fw-bold pt-2 me-2">Página</p>
      <Form.Select aria-label="Default select example"
        className="custom-select"
        name="selectNumRecords"
        id="selectNumRecords"
        value={currentPage}
        style={{ width: '5rem' }}
        onChange={handleChangePage}>
        {renderOptions().map((page) => {
          return <option key={page + 1}>{page + 1}</option>;
        })}
      </Form.Select>
    </div>

  );
};
