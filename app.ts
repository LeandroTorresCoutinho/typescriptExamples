import {Spacecraft, ContainerShip} from './base-ships'
import {MilleniumFalcon} from './starfighters'
import * as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40, "="))


let ship = new Spacecraft('HyperDrive')
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)

