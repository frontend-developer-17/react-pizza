import { ItemsPizza } from '../@types/types';

export default function Reduse(items:ItemsPizza[]) {
  return (
    items.reduce((sum:number, obj) => {
        return sum + obj.count;
      }, 0)
  )
}
