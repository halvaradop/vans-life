import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Vans } from "./pages/Vans"
import { VanDetail } from "./pages/VanDetail"
import { Van } from "./interfaces/types"
import { getAllVans } from "./service/getAllVans"
import { Layout } from "./components/Layout"
import { HostLayout } from "./pages/HostLayout"
import { Dashboard } from "./pages/host/Dashboard"
import { Reviews } from "./pages/host/Reviews"
import { Income } from "./pages/host/Income"
import { HostVans } from "./pages/host/HostVans"
import { HostVanDetail } from "./pages/host/HostVanDetail"


const App = () => {
    const [vanList, setVanList] = useState <Array<Van>> ([])

    useEffect(() => {
        getAllVans()
            .then(setVanList)
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans">
                        <Route index element={<Vans vanList={vanList} />} />
                        <Route path=":id" element={<VanDetail />} />
                    </Route>
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanDetail />}>
                            <Route index element />
                            <Route path="pricing" element />
                            <Route path="photos" element />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App