import { Background } from "modules/Background/Background"
import { DeviceType } from "shared/data"
import { Contact } from "modules/Contact"
import { Footer } from "modules/Footer"
import { Header } from "modules/Header"
import { Main } from "modules/Main"
import { Projects } from "modules/Projects"
import { Technologies } from "modules/Technologies"
import { useEffect, useState } from "react"
import { getCurrentDevice } from "shared/lib/getCurrentDevice/getCurrentDevice"
import { useDebounce } from "shared/lib/useDebounce/useDebounce"

function App() {
    const [device, setDevice] = useState<DeviceType>(() => getCurrentDevice(window.innerWidth))

    const debounceResizeHandler = useDebounce(() => {
        const currentDevice = getCurrentDevice(window.innerWidth)
        setDevice(prev => (currentDevice === prev ? prev : currentDevice))
    }, 500)

    useEffect(() => {
        window.addEventListener("resize", debounceResizeHandler)
        return () => window.removeEventListener("resize", debounceResizeHandler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header />
            <div>
                <Background currentDevice={device} />
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
