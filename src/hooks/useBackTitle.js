import {useContext, useEffect} from 'react';
import {GlobalContext} from '../globalContext';

function useBackTitle(navigation, title) {
  const {dispatch} = useContext(GlobalContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      dispatch({type: 'setBackTitle', payload: title});
    });
    return unsubscribe;
  }, [dispatch, navigation, title]);
}

export default useBackTitle;
