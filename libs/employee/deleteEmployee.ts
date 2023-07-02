export const deleteEmployee = async (employeeId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/employee/${employeeId}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    throw Error('Delete employee failed');
  }
};
