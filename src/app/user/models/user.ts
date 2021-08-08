export interface User {
    name: string;
    email: string;
    password: string;
    age:number
  }

export interface Error {
  code: number;
  message: string;
}