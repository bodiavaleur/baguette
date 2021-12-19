export function snapPoint(value: number, velocity: number, points: number[]) {
  'worklet';
  const point = value + 0.2 * velocity;
  const deltas = points.map(p => Math.abs(point - p));
  const minDelta = Math.min(...deltas);
  const [pointToSnap] = points.filter(p => Math.abs(point - p) === minDelta);

  return pointToSnap;
}
