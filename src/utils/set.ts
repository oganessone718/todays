const isSubset = <T>({
  subSet,
  set,
}: {
  subSet: Set<T>;
  set: Set<T>;
}): boolean => {
  for (const elem of subSet) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
};

export { isSubset };
