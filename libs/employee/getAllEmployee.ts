export const getAllEmployee = async (
  { offset, limit }: Paging = { offset: 1, limit: 10 }
): Promise<ResponseList<Employee>> => {
  const searchParams = new URLSearchParams({
    offset: String(offset),
    limit: String(limit),
  });
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/employee?${searchParams.toString()}`,
    {
     cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw Error('Failed to fetch Employee');
  }

  return response.json();
};
