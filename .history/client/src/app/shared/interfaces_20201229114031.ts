export interface User {
  id?: string;
  email: string;
  password: string;
}

export interface Category {
  name: string;
  imageSrc?: string;
  user?: string;
}
