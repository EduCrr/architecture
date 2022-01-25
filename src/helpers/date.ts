export const getCurrentDay = () => {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  console.log(year, month, day);

  return `${year}-${addZeroToDate(month)}-${addZeroToDate(day)}`;
};

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);
