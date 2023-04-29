export function getDates(data, setUniqueDates) {
  if (data.books.length > 1) {
    const length = data.books.length;

    for (let i = 0; i < length; i++) {
      const currentYear = data.books[i].year;
      setUniqueDates((prev) => {
        if (currentYear === "0") return prev;
        if (prev.some((year) => year === currentYear)) return prev;
        const updatedDates = [...prev, currentYear];
        return updatedDates.sort((a, b) => a - b);
      });
    }
  }
}

export function shortenTitle(title) {
  const colonIndex = title.indexOf(":");
  if (colonIndex !== -1) {
    return title.substring(0, colonIndex);
  }
  return title;
}
