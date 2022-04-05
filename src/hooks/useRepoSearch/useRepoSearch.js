import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadData} from '../../store/thunkTest/actions';
import {isEmptyObj} from '../../utils/isEmptyObj';

const initialState = {
  status: 'init',
  data: {},
};

export const useRepoSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.thunkTest.data);
  const [searchState, setSearchState] = useState(initialState);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSearchButtonClick = () => {
    if (inputValue) {
      setSearchState({
        status: 'loader',
        data: {},
      });
      dispatch(loadData(inputValue));
      setInputValue('');
    }
  };

  useEffect(() => {
    if (!isEmptyObj(searchData)) {
      setSearchState({
        status: 'success',
        data: searchData,
      });
    }
  }, [searchData]);

  return {
    inputValue,
    onInputChange,
    onSearchButtonClick,
    searchState,
  };
};
