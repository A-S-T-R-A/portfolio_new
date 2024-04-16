import { Canvas } from "modules/Canvas"
import { Background } from "modules/Background/Background"
import { DeviceType } from "shared/data"
import { Footer } from "modules/Footer"
import { Header } from "modules/Header"
import { Main } from "modules/Main"
import { Technologies } from "modules/Technologies"
import { useEffect, useState } from "react"
import { getCurrentDevice } from "shared/lib/getCurrentDevice/getCurrentDevice"
import { useDebounce } from "shared/lib/useDebounce/useDebounce"
import { ExperienceAndProjects } from "modules/ExperienceAndProjects/ExperienceAndProjects"

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
            <Canvas currentDevice={device} />
            <div>
                <Background currentDevice={device} />
                <Main />
                <ExperienceAndProjects />
                <Technologies />
            </div>
            <Footer />
        </div>
    )
}

export default App
