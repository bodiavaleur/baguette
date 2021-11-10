import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../index";

const counterState = (state: RootState) => state.counter

export const getCounter = createSelector(counterState, ({count}) => count)
