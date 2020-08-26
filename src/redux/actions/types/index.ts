const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export type ActionModel<M> = {
  type: string;
  data: M;
};

const defaultTypes = [REQUEST, SUCCESS, FAILURE];

function createRequestTypes(base: string, types = defaultTypes) {
  const res: {[type: string]: string} = {};
  types.forEach((type: string) => (res[type] = `${base}_${type}`));
  return res;
}

export const LOGOUT = 'LOGOUT';
export const AUTH = createRequestTypes('AUTH', [
  ...defaultTypes,
]);

export const MOVIES = createRequestTypes('MOVIES', [
  ...defaultTypes,
  'SET_LIST',
  'FETCH'
]);

export const CONTENT = createRequestTypes('CONTENT', [
  ...defaultTypes,
  'RESET'
]);

export const APP = createRequestTypes('APP', [
  'START',
  'READY',
  'AUTHORIZED',
  'UNAUTHORIZED',
  'ERROR'
]);

export const MY_LIST = createRequestTypes('MY_LIST', [
  'ADD',
  'REMOVE',
  'SET'
]);

