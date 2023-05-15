import { StarsCanvas } from "canvas/index"
import { Contact } from "modules/Contact"
import { Footer } from "modules/Footer"
import { Header } from "modules/Header"
import { Main } from "modules/Main"
import { Projects } from "modules/Projects"

import { Technologies } from "modules/Technologies"

function App() {
    return (
        <div>
            <Header />
            <StarsCanvas />
            <div>
                <Main />
                <Projects />
                <Technologies />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default App
