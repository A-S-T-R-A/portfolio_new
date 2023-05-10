import Form from "modules/Form/Form"
import { Main } from "modules/Main"
import { Navigation } from "modules/Navigation"
import { Projects } from "modules/Projects"
import { Technologies } from "modules/Technologies"

function App() {
    return (
        <div>
            <Navigation />
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
