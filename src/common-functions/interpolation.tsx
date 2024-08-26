export function lerp(start: number, end: number, factor: number) {
  return (end - start) * factor + start;
}

export function unlerp(start: number, end: number, value: number) {
  return (value - start) / (end - start);
}
