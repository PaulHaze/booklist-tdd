export const useTestArgs = (url, initialData) => {
  const returnedUrl = url;
  const returnedData = initialData;
  console.log('url from args', url);
  return {
    returnedUrl,
    returnedData,
  };
};
