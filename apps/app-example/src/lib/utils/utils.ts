// src/lib/utils/formDataUtils.ts

/**
 * Converte um FormData em um objeto pronto para validação com Zod (safeParse).
 * Transforma strings 'true'/'false' em booleanos e arquivos vazios em null.
 */
export function formDataToObject(formData: FormData): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "object" && value instanceof File) {
      obj[key] = value.size === 0 && value.name === "" ? null : value;
    } else if (value === "true") {
      obj[key] = true;
    } else if (value === "false") {
      obj[key] = false;
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

export function objectToFormData(data: Record<string, unknown>): FormData {
  const formData = new FormData();

  // Type guards
  const isFile = (value: unknown): value is File => value instanceof File;
  const isDate = (value: unknown): value is Date => value instanceof Date;

  Object.entries(data).forEach(([key, value]) => {
    if (value == null) return;

    if (isFile(value)) {
      formData.append(key, value);
    } else if (isDate(value)) {
      formData.append(key, value.toISOString());
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (isFile(item)) {
          formData.append(`${key}[${index}]`, item);
        } else {
          formData.append(`${key}[${index}]`, String(item));
        }
      });
    } else {
      formData.append(
        key,
        typeof value === "object" ? JSON.stringify(value) : String(value)
      );
    }
  });
  return formData;
}
