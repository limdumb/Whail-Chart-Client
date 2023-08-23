export const changeDate = (
  date: string | undefined,
  hour: number | undefined
) => {
  if (date !== undefined && hour !== undefined) {
    const changingDate = date + ` ${hour}시`;
    return changingDate;
  } else {
    return "";
  }
};
