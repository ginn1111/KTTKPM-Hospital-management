export const getAllEmployee = async (): Promise<Employee[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`);

  if (!response.ok) {
    throw Error('Failed to fetch Employee');
  }

  return response.json();
};
