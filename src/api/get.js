const API_KEY = "55316744-d36208193e3c53252b47581ad";
export const getData = async (page = 1) => {
  const result = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=cat&lang=ru&page=${page}&per_page=3`,
  );
  return await result.json()
};
