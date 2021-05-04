import React from 'react';
import axios from 'axios';

class App extends React.Component {
    render() {
        return(<div className="App">
            <h1>Dog Search Api v1.0</h1>
            <form>
                <input/>
                <button>Fetch Dogs</button>
            </form>
            <div>

            </div>
        </div>);
    }
}

export default App;