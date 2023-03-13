import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchData } from './Utils/api';
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from "./Pages/Home/Home";
import Error404 from './Pages/404/Error404';
import Explore from './Pages/Explore/Explore'
import Details from './Pages/Details/Details';
import SearchResult from './Pages/SearchResult/searchResult';



const App = () => {

    const dispatch = useDispatch();

    const { url } = useSelector((state) => state.home)
    console.log(url);

    useEffect(() => {
        fetchApiConfig();
    }, [])

    const fetchApiConfig = () => {
        fetchData('/configuration?api_key=')
            .then((res) => {
                console.log(res);

                const url = {
                    backdrop: res.images.secure_base_url + "original",
                    poster: res.images.secure_base_url + "original",
                    profile: res.images.secure_base_url + "original",
                }

                dispatch(getApiConfiguration(url));
            });
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default App
