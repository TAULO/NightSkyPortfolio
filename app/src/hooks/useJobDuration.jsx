export default function useJobDuration(from, to) {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  let years = toDate.getFullYear() - fromDate.getFullYear();
  let months = toDate.getMonth() - fromDate.getMonth();

  if (months < 0 || (months === 0 && toDate.getDate() < fromDate.getDate())) {
    years--;
    months += 12;
  }

  if (toDate.getDate() < fromDate.getDate()) {
    months--;
  }

  return {
    years,
    months,
  };
}
