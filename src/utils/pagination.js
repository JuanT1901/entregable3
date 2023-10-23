const paginationLogic = (currentPage, residents) => {
  if (residents.length === 0) {
    return {
      pages: [1],
      residentsInPage: [],
    };
  }

  const RESIDENTS_PER_PAGE = 12;

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = currentPage * RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  const pages = [];
  for (let i = 1; i < totalPages + 1; i++) {
    pages.push(i);
  }

  return {
    residentsInPage,
    pages,
  };
};

export { paginationLogic };
