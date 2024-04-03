import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    name: string;
}

export default function Button({ name }: Props) {
    return (
        <>
            <Link to={`/${name}`}>{name}</Link>
        </>
    );
}
