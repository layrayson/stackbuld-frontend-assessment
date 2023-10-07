import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/reducers/index.reducer';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
