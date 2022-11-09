import React, { useState } from "react";
import { useMusicBrain } from "../hooks/Lista";
import { DataToAPI } from "../types/dataToAPI";
import { ProviderProps } from "../types/providerProps.d";
import { MusicContext } from "./Context";

export const Provider = ({ children }: ProviderProps) => {
  const [dataToAPI, setDataToAPI] = useState<DataToAPI>({ limit: 10, offset: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, listOfGenres, totalRegisters } = useMusicBrain(
    dataToAPI.limit,
    dataToAPI.offset
  );


  const handleNumRecords: React.ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    setDataToAPI((prev) => ({ ...prev, limit: parseInt(target.value) }));
  };


  const handleChangePage: React.ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    const page = parseInt(target.value);
    setCurrentPage(page);
    const calcOffset = page * dataToAPI.limit - dataToAPI.limit;
    setDataToAPI((prev) => ({ ...prev, offset: calcOffset }));
  };

  return (
    <MusicContext.Provider
      value={{
        dataToAPI,
        isLoading,
        listOfGenres,
        totalRegisters,
        currentPage,
        handleChangePage,
        handleNumRecords,
      }}>
      {children}
    </MusicContext.Provider>
  );
};
