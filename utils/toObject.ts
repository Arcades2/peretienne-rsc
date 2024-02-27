export default function toObject<T, K extends string | number | symbol, V>(
  array: ReadonlyArray<T>,
  iteratee: (element: T, index: number, array: ReadonlyArray<T>) => [K, V],
): Record<K, V> {
  return array.reduce(
    (result, element, index) => {
      const [key, value] = iteratee(element, index, array);
      result[key] = value;
      return result;
    },
    {} as Record<K, V>,
  );
}
