import {choice, remove} from "./helpers"
import foods from "./foods"

let randomFruit = choice(foods);


console.log(`I'd like one ${randomFruit}, please`)
console.log(`Here you go: ${randomFruit}`)

let fruitsLeft = remove(foods, randomFruit)

console.log(`Delicious! May I have another?`)
console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} left`)