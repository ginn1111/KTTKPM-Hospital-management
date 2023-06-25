export const createEmployee = async (employee: Partial<Employee>) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
    method: 'POST',
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error('Create new employee failed');
  }

  return response.json();
};
