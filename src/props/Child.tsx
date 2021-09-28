import { FC } from 'react';

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child: FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Click</button>
        </div>
    );
};
