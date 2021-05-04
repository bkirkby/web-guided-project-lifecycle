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

            <div className="doggos">
                <img width='200' src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img width='200'src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img width='200'src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img width='200'src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img width='200'src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img width='200'src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img width='200'src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img width='200'src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img width='200'src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
            </div>
        </div>);
    }
}

export default App;