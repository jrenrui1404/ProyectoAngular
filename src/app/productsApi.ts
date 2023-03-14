export interface Rating {
  rate: number;
  count: number;
}

export interface RootObject {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}