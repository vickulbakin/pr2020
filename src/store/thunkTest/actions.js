import {getRepositories} from '../../utils/getRepositories';

export const PUT_DATA = 'PUT_DATA';

const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer,
  };
};

export const loadData = (searchValue) => (dispatch, getState) => {
  const repositoriesJson = getRepositories(searchValue);
  repositoriesJson
    .then((json) => {
      dispatch(putData(json));
    })
    .catch(() => {
      dispatch(
        putData({
          total_count: 0,
        })
      );
    });
};
