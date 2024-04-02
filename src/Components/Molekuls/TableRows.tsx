//import React from 'react'
import { Data } from '../Types/DataType.tsx';

type Props = {
  teamData: Data;
};

const divStyleRows = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 2fr 1fr 2fr 1fr 1fr 1fr',
  gap: '5px',
  alignItems: 'center',
  justifyItems: 'center'
};


export default function TableRows({ teamData }: Props) {
  return (
    <>
      <div className='grid-container'>
        <div><img src={teamData.teamIconUrl1} alt="" /></div>
        <div>{teamData.teamName1}</div>
        <div>{teamData.matchResults1}</div>
        <div>:</div>
        <div>{teamData.matchResults2}</div>
        <div>{teamData.teamName2}</div>
        <div><img src={teamData.teamIconUrl2} alt="" /></div>
      </div>
    </>
  )
};