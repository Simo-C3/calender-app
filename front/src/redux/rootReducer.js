import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";

import addScheduleReducer from "./addSchedule/renducer";

const rootReducer = combineReducers({
    calendar: calendarReducer,
    addSchedule: addScheduleReducer
});

export default rootReducer;