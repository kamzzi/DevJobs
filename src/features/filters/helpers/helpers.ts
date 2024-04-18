import { FiltersSchemaType } from "../FiltersSchema";

const isPropertyOfObject = (
  obj: FiltersSchemaType,
  key: string
): key is keyof typeof obj => {
  return key in obj;
};

export const removeEmptyProperties = (obj: FiltersSchemaType) => {
  for (const key in obj) {
    if (!isPropertyOfObject(obj, key)) return obj;
    const property = obj[key];
    if (!property) {
      delete obj[key];
    }
  }
  return obj;
};
