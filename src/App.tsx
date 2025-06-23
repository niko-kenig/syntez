import './App.css'
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Purchases from "./pages/Purchases/Purchases.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import About from "./pages/About/About.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Products from "./pages/Products";
import {Taiga} from "./pages/Products/Taiga";
import {Termat} from "./pages/Products/Termat";
import {Irkut} from "./pages/Products/Irkut";
import {IrkutShtamp} from "./pages/Products/IrkutShtamp";
import {IrkutVolochenie} from "./pages/Products/IrkutVolochenie";
import Layout from "./components/Layout/Layout.tsx";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="purchases" element={<Purchases/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="products/termat" element={<Termat/>}/>
                    <Route path="products/taiga" element={<Taiga/>}/>
                    <Route path="products/irkut" element={<Irkut/>}/>
                    <Route path="products/irkut-shtamp" element={<IrkutShtamp/>}/>
                    <Route path="products/irkut-volochenie" element={<IrkutVolochenie/>}/>
                    <Route path="404" element={<NotFound/>}/>
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
