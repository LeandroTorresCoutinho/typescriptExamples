class Spacecraft{

	constructor (public propulsor: string){}

	jumpIntoHyperspace(){
		console.log(`Entering in the Hyperspace with ${this.propulsor}`)
	}
}

interface ContainerShip {

	cargoContainers: number
}

export{Spacecraft, ContainerShip}