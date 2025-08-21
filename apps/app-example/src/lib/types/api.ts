export interface ApiError {
  success: boolean;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
}

export interface ApiCreated {
  success: boolean;
  id: string;
  createdAt?: Date;
}


