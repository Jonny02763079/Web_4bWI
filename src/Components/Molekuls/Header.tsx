import React, { useEffect, useState } from 'react'
import SearchField from '../Atoms/SearchField'
import Button from '../Atoms/Button';
import { Data } from '../Types/DataType.tsx'
import { DataTeams } from '../Types/DataTypeTeams.tsx'
import { DataUpcoming } from '../Types/DataTypeUpcoming.tsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import TeamsTable from '../../tabs/TeamsTable.tsx';
import TableGames from '../../tabs/TableGames.tsx';
import UpcomingGames from '../../tabs/UpcomingGames.tsx';

const router = createBrowserRouter([
    {
        path: "/Teams",
        element: <TeamsTable></TeamsTable>,
    },
    {
        path: "/Games",
        element: <TableGames></TableGames>,
    },
    {
        path: "/Upcoming Games",
        element: <UpcomingGames></UpcomingGames>,
    },
]);

type Props = {
    setDataFetched: Function;
    setDataFetchedTeams: Function;
    setDataFetchedUpcoming: Function;
}


export default function Header({ setDataFetched, setDataFetchedTeams, setDataFetchedUpcoming }: Props) {


    const [data, setData] = useState<Data[]>([]);
    const [dataTeams, setDataTeams] = useState<DataTeams[]>([]);
    const [dataUpcoming, setDataUpcoming] = useState<DataUpcoming[]>([]);
    const [filteredData, setFilteredData] = useState<Data[]>([]);
    const [filteredTeams, setFilteredTeams] = useState<DataTeams[]>([]);
    const [filteredDataUpcoming, setFilteredDataUpcoming] = useState<DataUpcoming[]>([]);


    useEffect(() => {
        fetch("https://api.openligadb.de/getmatchdata/bl1/2023/")
            .then(response => response.json())
            .then((data: Data[]) => {
                setData(data)
                setFilteredData(data)
                setDataFetched(data)
            })

        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then(response => response.json())
            .then((data: DataTeams[]) => {
                setDataTeams(data)
                setFilteredTeams(data)
                setDataFetchedTeams(data)
            })

        fetch("https://api.openligadb.de/getmatchdata/bl1/2023/")
            .then(response => response.json())
            .then((data: DataUpcoming[]) => {
                const filteredUpcoming = data.filter(element => element.matchIsFinished1 === false || element.matchIsFinished2 === false);
                setDataUpcoming(filteredUpcoming)
                setFilteredDataUpcoming(filteredUpcoming);
                setDataFetchedUpcoming(filteredUpcoming)
            })
    }, []);

    useEffect(() => {
        setDataFetched(filteredData);
    }, [filteredData])

    useEffect(() => {
        setDataFetchedUpcoming(filteredDataUpcoming);
    }, [filteredDataUpcoming])

    useEffect(() => {
        setDataFetchedTeams(filteredTeams);
    }, [filteredTeams])

    function SearchInput(value: string) {

        if (value.trim() === "") {
            setFilteredData(data)
            setFilteredTeams(dataTeams)
            setFilteredDataUpcoming(dataUpcoming)
        }

        console.log(value);
        const filteredTable = data.filter(
            element => (value.toLocaleLowerCase === element.teamName1.toLocaleLowerCase || value.toLocaleLowerCase === element.teamName2.toLocaleLowerCase) && (element.matchIsFinished1 === true || element.matchIsFinished2 === true)
        );
        setFilteredData(filteredTable);

        const filteredTeams = dataTeams.filter(
            element => (value.toLocaleLowerCase === element.teamName.toLocaleLowerCase)
        );
        setFilteredTeams(filteredTeams)

        const filteredTableUpcoming = data.filter(
            element => (value.toLocaleLowerCase === element.teamName1.toLocaleLowerCase || value.toLocaleLowerCase === element.teamName2.toLocaleLowerCase) && (element.matchIsFinished1 === false || element.matchIsFinished2 === false)
        );
        setFilteredDataUpcoming(filteredTableUpcoming);
    }

    return (
        <>
            <SearchField searchFunction={SearchInput}></SearchField>
            <div>Header</div>
            <RouterProvider router={router} />
            <Button name="Teams" ></Button>
            <Button name="Games" ></Button>
            <Button name="Upcoming Games" ></Button>
        </>
    )
}
