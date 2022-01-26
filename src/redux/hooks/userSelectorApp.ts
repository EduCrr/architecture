import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector;
