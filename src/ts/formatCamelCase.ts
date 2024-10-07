export const formatCamelCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
};
