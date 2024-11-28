export class ServiceBase {
  executeRequest = async ({ url, method, requestBody }: any) => {
    const rawResponse = await fetch(url, {
      method,
      body: JSON.stringify(requestBody),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await rawResponse.json();
    const { status } = rawResponse;
    if (status >= 400) {
      console.error(data.message);
      throw new Error(data.message);
    }
    return data;
  };
}
