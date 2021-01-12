export interface User {
  id?: string;
  email: string;
  password: string;
}

export interface Message {
  message: string;
}
export interface Category {
  name: string;
  imageSrc?: string;
  user?: string;
  _id?: string;
}
export interface Positions {
  name: string;
  cost: number;
  category: string;
  user?: string;
  _id?: string;
}
