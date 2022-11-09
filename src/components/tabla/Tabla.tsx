import React from "react";
import { useContext } from "react";
import { MusicContext } from "../../context/Context";
import Table from 'react-bootstrap/Table';

export const Tabla = () => {
  const { listOfGenres, isLoading } = useContext(MusicContext);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Disambiguation</th>
        </tr>
      </thead>

      {isLoading && (
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
      )}

      <tbody>
        {listOfGenres.map((genre) => {
          return (
            <tr key={genre.id}>
              <th scope="row">{genre.id}</th>
              <td>{genre.name}</td>
              <td>{genre.disambiguation}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

;
