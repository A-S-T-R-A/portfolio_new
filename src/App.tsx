import Form from "modules/Form/ui/Form"
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
                <Form />
            </div>
        </div>
    )
}

export default App
