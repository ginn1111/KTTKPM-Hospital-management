export const DEPARTMENT_BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/department`;

export const getAllDepartment = async () => {
  const response = await fetch(DEPARTMENT_BASE_URL, {
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw Error('Get all department failed');
  }

  return response.json();
};
