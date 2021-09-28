import { render } from 'react-dom';
import UserSearch from './state/UserSearch';

const App = () => (
    <div>
        <h1>
            <UserSearch />
        </h1>
    </div>
);

render(<App />, document.querySelector('#root'));
