export interface Todo {
    id: number;
    title:string,
    description: string;
    completed: boolean;
  }
  
  export const todos = [
    {
      id: 1,
      title:'read angular docs',
      description: 'read angular docs',
      completed: false
    },
    {
      id: 2,
      title: 'create a sample app',
      description: 'create a sample app',
      completed: false
    },

  ];