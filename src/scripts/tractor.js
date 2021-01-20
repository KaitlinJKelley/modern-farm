import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"

export const plantSeeds = (plan) => {
    for(let i = 0; i < plan.length; i++) {
        for(let j = 0; j < plan[i].length; j++) {
            if (plan[i] === "Asparagus") {
               const asparagus = createAsparagus()
               addPlant(asparagus)
               asparagus
            }
        }
    }
}

