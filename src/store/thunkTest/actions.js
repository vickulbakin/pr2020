export const PUT_DATA = "PUT_DATA";

const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer
  }
};

export const loadData = (searchValue) => (dispatch, getState) => {
  fetch(`https://api.github.com/search/repositories?q=${searchValue}`)
    .then((responce) => responce.json())
    .then((json) => {
      dispatch(putData(json));
    });
}
