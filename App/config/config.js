// @flow

const URL: string = 'http://localhost:3000/';

const Config: {
  URL: string,
  API: Object,
} = {
  URL,
  API: (data: string): string => URL + data,
};

export default Config;
