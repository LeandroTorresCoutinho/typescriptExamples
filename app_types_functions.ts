let message: string = "Help me, Obi-Wan"
console.log(message)

let episode: number = 4
console.log("this episode = " + episode)
episode = episode + 1
console.log("next episode = " + episode)

let favoriteDroid
favoriteDroid = "BB-8"

console.log("my favorite Droid is " + favoriteDroid)

let isEnoghtToBeatMF = function (parsecs: number) : boolean {
	return parsecs < 12
}

let distance = 14

console.log(`this ${distance} parsecs is enoght to beat millenium Falcon? ${isEnoghtToBeatMF(distance) ? 'YES': 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc(speed:number, inc: number = 1) : number {
	return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`) 
console.log(`inc (5) = ${inc(5)}`)