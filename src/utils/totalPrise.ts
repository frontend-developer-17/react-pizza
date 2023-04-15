import { ItemsPizza } from '../@types/types';

export const TotalPrise = (items:ItemsPizza[]) => {
  return (
    
    items.reduce((sum, obj) => {
       
        return (Number(obj.prise) * obj.count + sum);
      }, 0)
    
  )
}
