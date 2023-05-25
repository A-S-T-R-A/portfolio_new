import * as THREE from "three"

export type Position = [number, number, number]
export type Rotation = [number, number, number]
export type Vector = [number, number, number]
export type Scale = number
export type Speed = number

export type Journey = ([Position, Speed] | [Position])[]
export type Ref = THREE.Group

export interface IShipData {
    id?: number
    type?: "bombers" | "fighters"
    journey: Journey
}

export interface IDestroyersData extends IShipData {
    shuttles?: IShipData[]
}

export interface IShipsManeuvering {
    inertia: number
    rateOfTurn: number
    maxSpeed: number
    turnDeceleration: number
    rateOfTurningList: number
    rateOfStabilizingList: number
    maxList: number
}
