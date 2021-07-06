export interface Todo {
    id: number;
    title:string,
    description: string;
    completed: boolean;
  }
  
  export const todos = [
    {
      id: 1,
      description: 'read angular docs',
      completed: false
    },
    {
      id: 2,
      description: 'create a sample app',
      completed: false
    },
    {
      id: 3,
      description: 'test the app',
      completed: false
    }
  ];