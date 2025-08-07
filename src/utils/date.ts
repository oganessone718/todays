const formatDate = (dateInput: Date | string) => {
  const date = new Date(dateInput);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const weekdayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const weekday = weekdayNames[date.getDay()];

  return `${year}.${month}.${day} (${weekday})`;
};

const formatMonthDate = (dateInput: Date | string) => {
  const date = new Date(dateInput);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${month}월 ${day}일`;
};

const formatMonthDateForCreate = (dateInput: Date | string) => {
  const date = new Date(dateInput);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export { formatDate, formatMonthDate, formatMonthDateForCreate };
