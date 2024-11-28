const useInteractDelayRequest = () => {
  // eslint-disable-next-line consistent-return
  const executeInteract = async (
    serviceRequest: any,
    onStart: any,
    onFinished: any,
    onError: any,
    minRequestDuration: number = 900
  ): Promise<any> => {
    const startTime = Date.now();
    onStart();
    try {
      const response = await serviceRequest();
      return response;
    } catch (error) {
      console.error(error);
      onError();
    } finally {
      const endTime = Date.now();
      const difference = endTime - startTime;
      setTimeout(
        () => {
          onFinished();
        },
        difference > minRequestDuration ? 0 : minRequestDuration - difference
      );
    }
  };
  return { executeInteract };
};

export default useInteractDelayRequest;
