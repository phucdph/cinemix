export const numberFormatter = (
  num?: number | string,
  opts: Intl.NumberFormatOptions = { maximumFractionDigits: 12 }
) => {
  const number = Number(num);

  if (isNaN(number)) return "N/A";
  return num !== undefined && num !== null
    ? number.toLocaleString("en-US", opts)
    : "N/A";
};