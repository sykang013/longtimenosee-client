export interface CustomError {
  response?: {
    data?: {
      success?: string;
      data?: null;
      error?: {
        code?: string;
        message?: string;
      };
    };
  };
}
