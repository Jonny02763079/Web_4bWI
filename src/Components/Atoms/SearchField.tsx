import React from 'react';

type Props = {
    searchFunction: (value: string) => void;
}

export default function SearchField({ searchFunction }: Props) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        searchFunction(value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search Team"
                onChange={handleInputChange}
            />

        </>
    );
}
