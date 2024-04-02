import React from 'react';

type Props = {
    name: string;
    fn: () => void;
}

export default function Button({ name, fn }: Props) {
    return (
        <>
            <button onClick={fn}>{name}</button>
        </>
    );
}
