import React, { useEffect, useState } from 'react'
import SearchField from '../Atoms/SearchField'
import Button from '../Atoms/Button';
import { Data } from '../Types/DataType.tsx'
import { DataTeams } from '../Types/DataTypeTeams.tsx'
import { DataUpcoming } from '../Types/DataTypeUpcoming.tsx';

type Props = {
    setDataFetched: Function;
    setDataFetchedTeams: Function;
    setDataFetchedUpcoming: Function;
}


export default function Header({ setDataFetched, setDataFetchedTeams, setDataFetchedUpcoming }: Props) {


    const [data, setData] = useState<Data[]>([]);
    const [dataTeams, setDataTeams] = useState<DataTeams[]>([]);
    const [filteredData, setFilteredData] = useState<Data[]>([]);
    const [filteredDataUpcoming, setFilteredDataUpcoming] = useState<DataUpcoming[]>([]);


    useEffect(() => {
        fetch("https://api.openligadb.de/getmatchdata/bl1/2023/")
            .then(response => response.json())
            .then((data: Data[]) => setData(data))

        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then(response => response.json())
            .then((data: DataTeams[]) => setDataTeams(data))
    }, []);

    useEffect(() => {
        setDataFetched(filteredData);
    }, [filteredData])

    useEffect(() => {
        setDataFetchedUpcoming(filteredDataUpcoming);
    }, [filteredDataUpcoming])

    useEffect(() => {
        setDataFetchedTeams(dataTeams);
    }, [dataTeams])

    function SearchInput(value: string) {
        console.log(value);
        const filteredTable = data.filter(
            element => (value.toLocaleLowerCase === element.teamName1.toLocaleLowerCase || value.toLocaleLowerCase === element.teamName2.toLocaleLowerCase) && (element.matchIsFinished1 === true || element.matchIsFinished2 === true)
        );
        setFilteredData(filteredTable);

        const filteredTeams = dataTeams.filter(
            element => (value.toLocaleLowerCase === element.teamName.toLocaleLowerCase)
        );
        setDataTeams(filteredTeams)

        const filteredTableUpcoming = data.filter(
            element => (value.toLocaleLowerCase === element.teamName1.toLocaleLowerCase || value.toLocaleLowerCase === element.teamName2.toLocaleLowerCase) && (element.matchIsFinished1 === false || element.matchIsFinished2 === false)
        );
        setFilteredDataUpcoming(filteredTableUpcoming);
    }

    function fn() {
        console.log(
            "Hallo World"
        );

    }

    return (
        <>
            <SearchField searchFunction={SearchInput}></SearchField>
            <div>Header</div>
            <Button name="Goal Getter" fn={fn} ></Button>


        </>
    )
}
