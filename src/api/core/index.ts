import * as vars from '../../lib/var';
import {StoreConfig} from "../types";
import {Collection} from "../collections";

export default class TMDBStore {
  public static readonly instance = new TMDBStore();
  private readonly baseUri: string = "https://api.themoviedb.org/3";
  private readonly headers: {[key: string]: string} = {
    "Content-Type": "application/json;charset=utf-8"
  }
  private readonly baseParams: {[key: string]: string} = {
    api_key: vars.API_KEY,
    language: 'es-ES'
  };

  public collection<M>(name: string, options: StoreConfig) {
    let uri = `${this.baseUri}/${name}`;
    if (!!options.fn) {
      let fn = options.fn as string;
      uri = `${uri}/${fn}`;
    }
    let _data = {
      ...options.data,
      ...this.baseParams
    };

    return new Collection<M>(uri, "GET", _data, this.headers);
  }
}
