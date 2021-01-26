import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"


// export const plantSeeds = (plan) => {
//     for(let i = 0; i < plan.length; i++) {
//         for(let j = 0; j < plan[i].length; j++) {
//             if (plan[i] === "Asparagus") {
//                const asparagus = createAsparagus()
//                addPlant(asparagus)
//             }
//         }
//     }
// }

export const plantSeeds = (plan) => {
    const sowArray = plan.forEach((row) => {
        for (const index of row) {
            if (index === "Asparagus") {
               const asparagus = createAsparagus()
                addPlant(asparagus)
            } else if (index === "Potato") {
                const potato = createPotato()
                 addPlant(potato)
             } else if (index === "Soybean") {
                const soybean = createSoybean()
                 addPlant(soybean)
             } else if (index === "Sunflower") {
                const sunflower = createSunflower()
                 addPlant(sunflower)
             } else if (index === "Wheat") {
                const wheat = createWheat()
                 addPlant(wheat)
             } else if (index === "Corn") {
                const corn = createCorn()
                 addPlant(corn)
             }
        }
    })
    return sowArray
}

// const yearPlan = [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]