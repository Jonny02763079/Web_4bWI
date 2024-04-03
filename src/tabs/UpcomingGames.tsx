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
    const [Upcoming, setRenderedUpcoming] = useState<any>([]);

    useEffect(() => {
        const renderedTeams = fetchedGamesUpcoming.map(element => {
            <TableRowsUpcomingGames teamData={element}></TableRowsUpcomingGames>
        })
        setRenderedUpcoming(renderedTeams)
    }, [fetchedGamesUpcoming])

    return (
        <>
            <Header setDataFetched={setFetchedGames} setDataFetchedTeams={setFetchedGamesTeams} setDataFetchedUpcoming={setFetchedGamesUpcoming}></Header>
            <div className='motherBox'>
                {Upcoming}
            </div>

            hallo
        </>
    )
}

export default UpcomingGames
