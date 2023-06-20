declare global {
  export type Gender = 'male' | 'female' | 'other';

  export type Employee = {
    id: string;
    fullName: string;
    gender: Gender;
    dateOfBirth: string;
    address: string;
    department: string;
    position: string;
    title: string;
  };
}

export {};
