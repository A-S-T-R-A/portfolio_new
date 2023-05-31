import { Rotation } from "../types/types"
import { PI } from "./math/basics"

export function alignToX(r: Rotation): Rotation {
    //realigns z-aligned model with x axis
    const [x, y, z] = r
    return [x, y + PI / 2, z]
}
