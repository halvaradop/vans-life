import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Vans } from "./pages/Vans"
import { VanDetail } from "./pages/VanDetail"
import { Van } from "./interfaces/types"
import { getAllVans } from "./service/getAllVans"
import { Layout } from "./components/Layout"
import { Host } from "./pages/Host"
import { HostDashboard } from "./pages/Dashboard"
import { Reviews } from "./pages/Reviews"
import { Income } from "./pages/Income"


const App = () => {
    const [vanList, setVanList] = useState <Array<Van>> ([])

    useEffect(() => {
        getAllVans()
            .then(setVanList)
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans vanList={vanList} />} />
                    <Route path="/vans/:id" element={<VanDetail />} />
                    <Route path="/host" element={<Host />}>
                        <Route path="dashboard" element={<HostDashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App