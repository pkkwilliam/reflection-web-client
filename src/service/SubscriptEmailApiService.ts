import { ServiceBase } from './ServiceBase';

const PROD = 'https://api.noflee.com';

export class SubscriptEmailApiService extends ServiceBase {
  subscript = async (email: any): Promise<any> => {
    const request = {
      url: `${PROD}/public/email_subscription/v1`,
      method: 'POST',
      requestBody: {
        email,
      },
    };
    return this.executeRequest(request);
  };
}
