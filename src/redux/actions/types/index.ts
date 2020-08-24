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

export const APP = createRequestTypes('APP', [
  'START',
  'READY',
  'AUTHORIZED',
  'UNAUTHORIZED',
  'ERROR'
])

