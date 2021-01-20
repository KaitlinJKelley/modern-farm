const fieldArray = []

export const addPlant = (seedObj) => {
    fieldArray.push(seedObj)
    console.log("Add plant")
}

export const usePlants = () => {
    console.log("Use plant")
    return fieldArray.slice()
   
}
    

