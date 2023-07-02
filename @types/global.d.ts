declare global {
  export type ValueOf<T> = T[keyof T];

  export type Employee = {
    id: string;
    fullName: string;
    gender: number;
    dateOfBirth: string;
    address: string;
    phone: string;
    email: string;
    isActive: boolean;
    isComposite: boolean;
    departmentId: string;
    isLeader: boolean;
  };

  export type Department = {
    id: number;
    departmentName: string;
    leaderId: string | null;
    isActive: true;
    isComposite: true;
    departmentId: null | string | number;
  };

  export type ResponseList<T> = {
    data: T[];
    total?: number;
  };

  export type Paging = {
    offset: number;
    limit: number;
  };

  export type ScheduleDate = '0' | '1' | '2' | '3' | '4' | '5' | '6';

  export type ScheduleShift = 'morning' | 'afternoon';

  export type Schedule = {
    [K in ScheduleDate]: {
      [S in ScheduleShift]: { name: string; id: string };
    } & {
date: string;

    };
  };

  export type ScheduleItem = {
    id: string;
    department_name: string;
    schedule: Schedule;
  };
}

export {};
