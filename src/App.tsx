import { Contact } from "modules/Contact"
import { Header } from "modules/Header"
import { Main } from "modules/Main"
import { Projects } from "modules/Projects"
import { Technologies } from "modules/Technologies"

function App() {
    return (
        <div>
            <Header />
            <div>
                <Main />
                <Projects />
                <Technologies />
                <Contact />
            </div>
        </div>
    )
}

export default App
