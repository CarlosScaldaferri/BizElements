import axios from "axios";

// Interface para erro customizado com propriedades adicionais
interface CustomError extends Error {
  status?: number;
  code?: string;
}

// Interceptor global para extrair mensagens de erro do servidor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    // Se for erro do axios com response do servidor
    if (error.response?.data?.error?.message) {
      // Criar um novo Error com a mensagem do servidor
      const serverError: CustomError = new Error(
        error.response.data.error.message
      );
      // Preservar outras propriedades úteis
      serverError.status = error.response.status;
      serverError.code = error.response.data.error.code;
      throw serverError;
    }

    // Para outros erros, manter comportamento original
    throw error;
  }
);

export default axios;
