import React from "react";

import { GridList, Typography } from "@material-ui/core";

import * as styles from "./style.css";

import CalendarElement from "../CalendarElement";

const day = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
    console.log(calendar);
    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {day.map(d => (
                    <li key={d}>
                        <Typography className={styles.days} color="textSecondary" align="center" variant="caption" component="div">
                            {d}
                        </Typography>
                    </li>
                ))}
                {calendar.map(c => (
                    <li key={c.toISOString()} onClick={() => openAddScheduleDialog(c)}>
                        <CalendarElement day={c} month={month} />
                    </li>
                ))}
            </GridList>
        </div>
    );
};

export default CalendarBoard;