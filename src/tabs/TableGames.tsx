import './App.css'
import Header from '../Components/Molekuls/Header.tsx'
import TableRows from '../Components/Molekuls/TableRows.tsx'
import { useEffect, useState } from 'react'
import { Data } from '../Components/Types/DataType.tsx'
import { DataUpcoming } from '../Components/Types/DataTypeUpcoming.tsx'


function TableGames() {

  const [fetchedGames, setFetchedGames] = useState<Data[]>([]);
  const [fetchedGamesTeams, setFetchedGamesTeams] = useState<Data[]>([]);
  const [fetchedGamesUpcoming, setFetchedGamesUpcoming] = useState<DataUpcoming[]>([]);

  useEffect(() => {
    fetchedGames.forEach(element => {
      <TableRows teamData={element}></TableRows>
    });
  }, [fetchedGames])

  return (
    <>
      <Header setDataFetched={setFetchedGames} setDataFetchedTeams={setFetchedGamesTeams} setDataFetchedUpcoming={setFetchedGamesUpcoming}></Header>
      <div className='motherBox'>

      </div>

      hallo
    </>
  )
}

export default TableGames
