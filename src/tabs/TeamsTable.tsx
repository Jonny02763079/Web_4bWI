import './App.css'
import Header from '../Components/Molekuls/Header'
import { useEffect, useState } from 'react'
import { Data } from '../Components/Types/DataType.tsx'
import { DataUpcoming } from '../Components/Types/DataTypeUpcoming.tsx'
import TableRowsTeams from '../Components/Molekuls/TableRowsTeams.tsx'
import { DataTeams } from '../Components/Types/DataTypeTeams.tsx'


function App() {

    const [fetchedGames, setFetchedGames] = useState<Data[]>([]);
    const [fetchedGamesTeams, setFetchedGamesTeams] = useState<DataTeams[]>([]);
    const [fetchedGamesUpcoming, setFetchedGamesUpcoming] = useState<DataUpcoming[]>([]);

    useEffect(() => {
        fetchedGamesTeams.forEach(element => {
            <TableRowsTeams teamData={element}></TableRowsTeams>
        });
    }, [fetchedGamesTeams])

    return (
        <>
            <Header setDataFetched={setFetchedGames} setDataFetchedTeams={setFetchedGamesTeams} setDataFetchedUpcoming={setFetchedGamesUpcoming}></Header>
            <div className='motherBox'>

            </div>

            hallo
        </>
    )
}

export default App
