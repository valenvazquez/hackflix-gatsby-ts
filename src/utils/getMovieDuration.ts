export const getMovieDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const rmin = minutes % 60;
  return `${hours ? hours + ' h ' : ''}${rmin ? rmin + ' min ' : ''}`;
};
