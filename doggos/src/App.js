import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: []
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/husky/images')
            .then(resp=> {
                console.log('resp: ', resp);
                this.setState({
                    dogImages: resp.data.message
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    //1. Add in state for breed.
    //2. add in onChange to collect breed from user
    //3. add in onSubmit
    //4. run Axios call in onSubmit to get breed's images
    //5. Add in images to state.

    render() {
        return(<div className="App">
            <h1>Dog Search Api v1.0</h1>

            <form>
                <input />
                <button>Fetch Dogs</button>
            </form>

            <div className="doggos">
                {
                    this.state.dogImages.map(image=> {
                        return <img key={image} width='200' src={image} alt={image}/>
                    })
                }
            </div>
        </div>);
    }
}

export default App;