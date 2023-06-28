import { DEPARTMENT_BASE_URL } from './getAllDepartment';

export const createDepartment = async (department: Partial<Department>) => {
  const response = await fetch(DEPARTMENT_BASE_URL, {
    method: 'POST',
    body: JSON.stringify(department),
  });

  if (!response.ok) {
    throw Error('Create department failed');
  }

  return response.json();
};
