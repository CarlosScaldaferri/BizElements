import { ApiResponse, TApiCreated } from "../types/api";
import axios, { AxiosError } from "axios";
import { ExampleSchemaType } from "@/business/schemas/ExampleSchema";

// Configuração do axios para esta API
const apiClient = axios.create({
  timeout: 10000, // 10 segundos
  headers: {
    "Content-Type": "application/json",
  },
});

export async function registerExampleFetch(
  data: ExampleSchemaType
): Promise<ApiResponse<TApiCreated>> {
  try {
    const response = await apiClient.post<ApiResponse<TApiCreated>>(
      "/api/example/register",
      data
    );

    // Validação da estrutura da resposta
    const result = response.data;
    if (!result || typeof result.success !== "boolean") {
      throw new Error("Resposta inválida do servidor");
    }

    return result;
  } catch (error) {
    // Tratamento específico para erros do Axios
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiResponse<never>>;

      // Erro de timeout
      if (error.code === "ECONNABORTED") {
        throw new Error("Timeout na requisição. Tente novamente.");
      }

      // Erro de rede
      if (!error.response) {
        throw new Error("Erro de conexão. Verifique sua internet.");
      }

      // Erro do servidor com resposta estruturada
      const serverError = axiosError.response?.data;
      if (serverError?.error?.message) {
        throw new Error(serverError.error.message);
      }

      // Erro HTTP genérico
      throw new Error(
        `Erro ${error.response.status}: ${error.response.statusText}`
      );
    }

    // Outros erros
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Erro inesperado na requisição");
  }
}

// // Função auxiliar para upload de arquivos (quando necessário)
// export async function registerExampleWithFiles(
//   data: ExampleSchemaType & { files?: File[] }
// ): Promise<ApiResponse<TExample>> {
//   const formData = new FormData();

//   // Type guards
//   const isFile = (value: unknown): value is File => value instanceof File;
//   const isDate = (value: unknown): value is Date => value instanceof Date;

//   Object.entries(data).forEach(([key, value]) => {
//     if (value == null) return;

//     if (isFile(value)) {
//       formData.append(key, value);
//     } else if (isDate(value)) {
//       formData.append(key, value.toISOString());
//     } else if (Array.isArray(value)) {
//       value.forEach((item, index) => {
//         if (isFile(item)) {
//           formData.append(`${key}[${index}]`, item);
//         } else {
//           formData.append(`${key}[${index}]`, String(item));
//         }
//       });
//     } else {
//       formData.append(
//         key,
//         typeof value === "object" ? JSON.stringify(value) : String(value)
//       );
//     }
//   });

//   try {
//     const response = await apiClient.post<ApiResponse<TExample>>(
//       "/api/example/upload",
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     // Mesmo tratamento de erro da função anterior
//     throw error;
//   }
// }
