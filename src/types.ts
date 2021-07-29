export interface Formdata {
  image: string;
  name: string;
  price: number;
  description: string;
}

export interface FoodType extends FormData {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}
