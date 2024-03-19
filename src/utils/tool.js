export function formatNumber(num) {
  num = Number(num);
  if (num % 1 !== 0) {
    num = Math.round(num);
  }

  return num.toLocaleString();
}
