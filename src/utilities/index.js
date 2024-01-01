import {surpriseMePrompts} from '../constants'

export function getRandomPrompt(prompt) {
    const randomInd =Math.floor(Math.random()*
    surpriseMePrompts.length);
   const randomPrompt =surpriseMePrompts[randomInd]
   if (randomPrompt ===prompt) return getRandomPrompt(prompt); //this is used to avoid getting the same prompt two times in a row 
    return randomPrompt
}