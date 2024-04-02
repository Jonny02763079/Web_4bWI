import './App.css'
import Header from '../Components/Molekuls/Header'
import TableRowsUpcomingGames from '../Components/Molekuls/TableRowsUpcomingGames.tsx'
import { useEffect, useState } from 'react'
import { Data } from '../Components/Types/DataType.tsx'
import { DataUpcoming } from '../Components/Types/DataTypeUpcoming.tsx'

function UpcomingGames() {

    const [fetchedGames, setFetchedGames] = useState<Data[]>([]);
    const [fetchedGamesTeams, setFetchedGamesTeams] = useState<Data[]>([]);
    const [fetchedGamesUpcoming, setFetchedGamesUpcoming] = useState<DataUpcoming[]>([]);

    useEffect(() => {
        fetchedGamesUpcoming.forEach(element => {
            <TableRowsUpcomingGames teamData={element}></TableRowsUpcomingGames>
        });
    }, [fetchedGamesUpcoming])

    return (
        <>
            <Header setDataFetched={setFetchedGames} setDataFetchedTeams={setFetchedGamesTeams} setDataFetchedUpcoming={setFetchedGamesUpcoming}></Header>
            <div className='motherBox'>

            </div>

            hallo
        </>
    )
}

export default UpcomingGames
