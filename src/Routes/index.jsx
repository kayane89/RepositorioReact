import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Home } from "../pages/Home"
import { Contact } from "../pages/Contact"
import { Project } from "../pages/Project"


export const AppRoutes = () => (
        <Router>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<Project />} path="/project" />
            </Routes>
        </Router>



)