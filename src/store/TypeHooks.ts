import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDisptach } from '@/store';

export const useAppDispatch: () => AppDisptach = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
