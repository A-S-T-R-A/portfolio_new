import { ReactElement } from "react"
import { destroyers } from "../../../const/destroyers"
import { Destroyer } from "./Destroyer/Destroyer"

export function Destroyers(): ReactElement {
    return (
        <>
            {destroyers.map(item => {
                const { id } = item
                return <Destroyer key={id} data={item} />
            })}
        </>
    )
}
