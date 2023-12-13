import React from 'react'

export default function PersonCard({ firstname, lastname }) {
    console.log("name:", firstname);
    return (
        <>
            <div>{firstname}</div>
            <div>{lastname}</div>
        </>

    )
}
