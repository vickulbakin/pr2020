import {getRepositories} from '../getRepositories';

const hits = {
  incomplete_results: false,
  total_count: 1,
  items: [
    {
      owner: {
        login: test,
      },
      name: 'Ivan',
      html_url: 'www.test.ru',
      stargazers_count: 5,
    },
  ],
};

// Мокирование путем глобального переопределения функции fetch
describe('Если в getRepositories передано значение', () => {
  const fetchOld = global.fetch;
  const fetchMock = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(hits),
    })
  );

  beforeEach(() => {
    global.fetch = fetchMock;
    fetch.mockClear();
  });

  afterEach(() => {
    global.fetch = fetchOld;
  });

  it('функция возвращает список репозиториев', () => {
    const repositoriesJson = getRepositories('test');

    repositoriesJson.then((json) => {
      expect(json).toEqual(hits);
    });
  });
});

// Аналогично предыдущему тесту, но с дополнительным переопределением
// поведения функции fetch для одного теста при помощи mockImplementationOnce
describe('Если github api не отвечает', () => {
  const fetchOld = global.fetch;
  const fetchMock = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(hits),
    })
  );

  beforeEach(() => {
    global.fetch = fetchMock;
    fetch.mockClear();
  });

  afterEach(() => {
    global.fetch = fetchOld;
  });

  it('функция возвращает ошибку', () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));

    const repositoriesJson = getRepositories('test');

    repositoriesJson.catch((error) => {
      expect(error.message).toEqual('API is down');
    });
    expect(fetch).toHaveBeenCalledWith('https://api.github.com/search/repositories?q=test');
  });
});
