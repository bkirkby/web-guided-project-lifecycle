import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [],
        breed: 'husky'
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/husky/images')
            .then(resp=> {
                this.setState({
                    dogImages: resp.data.message
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    //1. Add in state for breed.
    //2. Add in onChange to collect breed from user
    //3. Add in onSubmit
    //4. Run axios call in onSubmit to get breed's images
    //5. Add in images to state.
    handleFormChange = (e)=>{
        this.setState({
            breed: e.target.value
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
            .then(resp=> {
                console.log(resp);
            })
            .catch(err=>{
                console.log(err);
            });
    }


    render() {
        return(<div className="App">
            <h1>Dog Search Api v1.0</h1>

            <form onSubmit={this.handleFormSubmit}>
                <input value={this.state.breed} onChange={this.handleFormChange}/>
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