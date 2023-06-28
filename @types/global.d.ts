declare global {
  export type ValueOf<T> = T[keyof T];

  export type Employee = {
    id: string;
    fullName: string;
    gender: number;
    dateOfBirdth: string;
    address: string;
    phone: string;
    email: string;
    isActive: boolean;
    isComposite: boolean;
    departmentId: string;
  };

  export type Department = {
    id: number;
    departmentName: string;
    leaderId: string | null;
    isActive: true;
    isComposite: true;
    departmentId: null | string | number;
  };
}

export {};
