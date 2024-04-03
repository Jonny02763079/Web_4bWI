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
    const [Teams, setRenderedTeams] = useState<any>([]);

    useEffect(() => {
        const renderedTeams = fetchedGamesTeams.map(element => {
            <TableRowsTeams teamData={element}></TableRowsTeams>
        })
        setRenderedTeams(renderedTeams)
    }, [fetchedGamesTeams])

    return (
        <>
            <Header setDataFetched={setFetchedGames} setDataFetchedTeams={setFetchedGamesTeams} setDataFetchedUpcoming={setFetchedGamesUpcoming}></Header>
            <div className='motherBox'>
                {Teams}
            </div>

            hallo
        </>
    )
}

export default App
