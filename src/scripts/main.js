console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

// const plan = createPlan()

// console.log(plan)

import { createCorn } from "./seeds/corn.js"

// console.log(createCorn())

import { usePlants } from "./field.js"
import { addPlant } from "./field.js"

// addPlant(createCorn())
// const checkCorn = usePlants()
// console.log(checkCorn)

// console.log(Array.isArray(checkCorn))

import { plantSeeds } from "./tractor.js"

const yearPlan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

// console.log(plantSeeds(yearPlan))
plantSeeds(yearPlan)
const plants = usePlants()
console.log(plants)


