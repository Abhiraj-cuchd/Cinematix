import { useEffect } from "react";
import { fetchData } from './Utils/api';

const App = () => {

    useEffect(() => {
        testApi();
    }, [])

    const testApi = () => {
        fetchData('/movie/popular?api_key=')
            .then((res) => {
                console.log(res);
            });
    }

    return (
        <div className="App">
            <h1>Cinematix</h1>
        </div>
    )
}

export default App
