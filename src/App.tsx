import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Vans } from "./pages/Vans/Vans"
import { VanDetail } from "./pages/Vans/VanDetail"
import { Layout } from "./components/Layout"
import { HostLayout } from "./components/HostLayout"
import { Dashboard } from "./pages/Host/Dashboard"
import { Reviews } from "./pages/Host/Reviews"
import { Income } from "./pages/Host/Income"
import { HostVans } from "./pages/Host/HostVans"
import { HostVanDetail } from "./pages/Host/HostVanDetail"
import { HostVanInformation } from "./pages/Host/HostVanInformation"
import { HostVanPricing } from "./pages/Host/HostVanPricing"
import { HostVanPhotos } from "./pages/Host/HostVanPhotos"
import { NotFoundPage } from "./pages/NotFoundPage"

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans">
                        <Route index element={<Vans />} />
                        <Route path=":id" element={<VanDetail />} />
                    </Route>
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanDetail />}>
                            <Route index element={<HostVanInformation />} />
                            <Route path="pricing" element={<HostVanPricing />} />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App