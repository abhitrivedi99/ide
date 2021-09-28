import { useState, FC } from 'react';

const users = [
    { name: 'Abhi', age: 20 },
    { name: 'Alex', age: 22 }
];

const UserSearch: FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string; age: number } | undefined>();

    const onClick = () => {
        const usr = users.find((user) => {
            return user.name === name;
        });

        setUser(usr);
    };

    return (
        <div>
            User Search
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find</button>
            <div>{user && user.name}</div>
        </div>
    );
};

export default UserSearch;
