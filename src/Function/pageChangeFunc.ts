export const goToPreviousPage = (
  pages: number,
  setPages: React.Dispatch<React.SetStateAction<number>>
) => {
  if (pages > 1) {
    setPages(pages - 1);
  }
};

export const goToNextPage = (
  pages: number,
  setPages: React.Dispatch<React.SetStateAction<number>>,
  totalPages: number
) => {
  if (pages < totalPages) {
    setPages(pages + 1);
  }
};

export const goToPage = (
  pages: number,
  setPages: React.Dispatch<React.SetStateAction<number>>,
  totalPages: number
) => {
  if (pages >= 1 && pages <= totalPages) {
    setPages(pages);
  }
};