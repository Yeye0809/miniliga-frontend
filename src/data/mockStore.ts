const storagePrefix = "miniliga:";

export function readMockCollection<T>(name: string, initialData: T[]): T[] {
  const key = `${storagePrefix}${name}`;
  const storedValue = localStorage.getItem(key);

  if (storedValue === null) {
    const seed = JSON.parse(JSON.stringify(initialData)) as T[];
    localStorage.setItem(key, JSON.stringify(seed));
    return seed;
  }

  const data: unknown = JSON.parse(storedValue);
  if (!Array.isArray(data)) {
    throw new Error(`Los datos locales de ${name} no tienen un formato válido.`);
  }

  return data as T[];
}

export function writeMockCollection<T>(name: string, data: T[]): void {
  localStorage.setItem(`${storagePrefix}${name}`, JSON.stringify(data));
}

export function nextMockId<T extends { id: number }>(items: T[]): number {
  return items.reduce((largestId, item) => Math.max(largestId, item.id), 0) + 1;
}
