export const updateEmployee = async (employee: Partial<Employee>) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/employee/${employee.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(employee),
    }
  );

  if (!response.ok) {
    throw new Error('Update employee failed');
  }

  return response.json();
};
