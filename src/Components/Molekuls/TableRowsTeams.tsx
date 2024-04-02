//import React from 'react'
import { DataTeams } from '../Types/DataTypeTeams.tsx'

type Props = {
    teamData: DataTeams;
};

export default function TableRowsTeams({ teamData }: Props) {
    return (
        <>
            <div>
                <div><img src={teamData.teamIconUrl} alt="" /></div>
                <div>{teamData.teamName}</div>
                <div>{teamData.matches}</div>
                <div>{teamData.points}</div>
                <div>{teamData.goals}</div>
                <div>
                    <div>{teamData.won}</div>
                    <div>{teamData.lost}</div>
                    <div>{teamData.draw}</div>
                </div>
                <div>{teamData.goalDiff}</div>
            </div>
        </>
    )
}
