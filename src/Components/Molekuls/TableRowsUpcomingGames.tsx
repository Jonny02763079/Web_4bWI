//import React from 'react'
import { DataUpcoming } from '../Types/DataTypeUpcoming.tsx'

type Props = {
    teamData: DataUpcoming;
};

export default function TableRowsTeams({ teamData }: Props) {
    return (
        <>
            <div className='grid-container'>
                <div><img src={teamData.teamIconUrl1} alt="" /></div>
                <div>{teamData.teamName1}</div>
                <div>-</div>
                <div>:</div>
                <div>-</div>
                <div>{teamData.teamName2}</div>
                <div><img src={teamData.teamIconUrl2} alt="" /></div>
            </div>
        </>
    )
}
