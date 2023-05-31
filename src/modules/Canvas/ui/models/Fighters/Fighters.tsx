import { Journey } from "../../../types/types"
import { fightersSquadrons } from "../../../const/fightersSquadrons"
import { Fighter } from "./Fighter/Fighter"
import { Bomber } from "./Bomber/Bomber"
import { offsetSquadronJourney } from "./offsetSquadronJourney"

export function Fighters() {
    return (
        <>
            {fightersSquadrons.map(item => {
                const { id, journey, type } = item
                if (type === "bombers") {
                    return <BombersSquadron key={id} journey={journey} />
                }
                if (type === "fighters") {
                    return <FightersSquadron key={id} journey={journey} />
                }
                return null
            })}
        </>
    )
}

interface ISquadron {
    journey: Journey
}

export function FightersSquadron(props: ISquadron) {
    return (
        <>
            {Array(7)
                .fill("")
                .map((_, index) => (
                    <Fighter key={index} journey={offsetSquadronJourney(props.journey, index)} />
                ))}
        </>
    )
}

export function BombersSquadron(props: ISquadron) {
    return (
        <>
            {Array(7)
                .fill("")
                .map((_, index) => (
                    <Bomber key={index} journey={offsetSquadronJourney(props.journey, index)} />
                ))}
        </>
    )
}
