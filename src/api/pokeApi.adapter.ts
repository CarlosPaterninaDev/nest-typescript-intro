import axios from "axios";


export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  post<T>(): Promise<T>;
  patch<T>(): Promise<T>;
  delete<T>(): Promise<T>;
}

export class PokeApiFetch implements HttpAdapter {

  async get<T>(url: string) {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data
  }

  post<T>(): Promise<T> {
    throw new Error("Method not implemented.");
  }
  patch<T>(): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete<T>(): Promise<T> {
    throw new Error("Method not implemented.");
  }

}

export class PokeApiAdapter implements HttpAdapter {

  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get<T>(url);
    return data;
  }

  post<T>(): Promise<T> {
    throw new Error("Method not implemented.");
  }
  patch<T>(): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete<T>(): Promise<T> {
    throw new Error("Method not implemented.");
  }

}
