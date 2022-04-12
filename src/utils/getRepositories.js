export function getRepositories(searchValue) {
  return fetch(`https://api.github.com/search/repositories?q=${searchValue}`)
    .then((responce) => responce.json())
    .catch((error) => {
      throw new Error(error);
    });
}
