
export const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1900; year--) {
    years.push(
      <option key={year} value={year}>
        {year}
      </option>,
    );
  }
  return years;
};

export const generateMonthOptions = () => {
  const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];

  return months.map((month, i) => (
    <option key={i} value={i + 1}>
      {month}
    </option>
  ));
};

export const generateDayOptions = () => {
  return Array.from({ length: 31 }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));
};
