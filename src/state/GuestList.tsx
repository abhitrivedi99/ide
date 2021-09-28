import { FC, useState } from 'react';

const GuestList: FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const renderGuests = guests.map((guest) => <li key={Math.random()}>{guest}</li>);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    };

    return (
        <div>
            <h3>Guest List</h3>
            <ul>{renderGuests}</ul>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
        </div>
    );
};

export default GuestList;
