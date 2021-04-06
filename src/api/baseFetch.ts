type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

export const BASE_URL =
  "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg";

interface Params {
  method: HttpMethods;
}

export const baseFetch = async <R>({ method = "GET" }: Params): Promise<R> => {
  const response = await fetch(BASE_URL, {
    method,
  });

  return response.json();
};
