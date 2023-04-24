import logo from '../logo.svg';
import '../App.css';
import Banner from "./Banner.js";

function App() {
    return (
        <div className="App">
            <Banner/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Bonjour Kasa</h1>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
