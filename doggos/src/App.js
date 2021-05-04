import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: []
    }

    conponentDidMount() {
        
    }

    render() {
        return(<div className="App">
            <h1>Dog Search Api v1.0</h1>

            <form>
                <input/>
                <button>Fetch Dogs</button>
            </form>

            <div className="doggos">
                {
                    this.state.dogImages.map(image=> {
                        return <img key={ImageBitmapRenderingContext} width='200' src={image} alt={image}/>
                    })
                }
            </div>
        </div>);
    }
}

export default App;