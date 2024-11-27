import { SubscriptEmailApiService } from '../service/SubscriptEmailApiService';

export const useService = () => {
  const subscript = async (email: string) => {
    const service = new SubscriptEmailApiService();
    return service.subscript(email);
  };
  return { subscript };
};
