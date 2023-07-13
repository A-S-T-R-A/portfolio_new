import { ReactElement } from "react"
import { destroyers } from "../../../const/destroyers"
import { Destroyer } from "./Destroyer/Destroyer"
import { DeviceType } from "shared/data"

export function Destroyers({ currentDevice }: { currentDevice: DeviceType }): ReactElement {
    return (
        <>
            {destroyers[currentDevice].map(item => {
                const { id } = item
                return <Destroyer key={id} data={item} />
            })}
        </>
    )
}
