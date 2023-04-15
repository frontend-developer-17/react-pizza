import { TotalPrise } from "./totalPrise"

 export const getItemfromLS = () => {
    const data = localStorage.getItem('BASKET')
    const items = data? JSON.parse(data):[]
    const totalPrise = TotalPrise(items)
 
    return {
items,
totalPrise
    }
  
 
 
 
  
 
}
