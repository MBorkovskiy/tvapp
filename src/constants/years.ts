export const years: string[] = [];
const getYears = () => {
  for (let i = 2000; i < 2024; i++) {
    years.push(i.toString());
  }
  return years.reverse();
};
getYears();

export const yearDirectionList: string[] = ["High to Low", "Low to High"];
