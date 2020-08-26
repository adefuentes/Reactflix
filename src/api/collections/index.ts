import {MethodRequest} from "../types";
import axios, {AxiosResponse} from "axios";

export class Collection<M> {
  private readonly uri: string;
  private readonly method: MethodRequest;
  private readonly extraData: any;
  future: Promise<AxiosResponse<M>>;

  constructor(
    uri: string,
    method: MethodRequest,
    extraData: {[id: string]: string},
    headers: {[id: string]: string},
  ) {
    this.uri = uri;
    this.method = method;
    this.extraData = extraData;
    this.future = this.fetch(headers);
  }

  private async fetch(headers: {[id: string]: string}) {
    return await axios.request<M>({
      url: this.uri,
      method: this.method,
      params: this.extraData,
      headers,
    });
  }
}
