import React from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  DialogActions,
  Button,
  Input,
  Grid
} from "@material-ui/core";

import { LocationOnOutlined, NotesOutlined, AccessTime, Close, ImageOutlined } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import { DatePicker } from "@material-ui/pickers";
import * as styles from "./style.css";

const spacer = { margin: "4px 0" };

const Title = withStyles({
  root: { marginBottom: 32, fontSize: 22 }
})(Input);

const AddScheduleDialog = ({
  schedule: {
    form: { title, location, description, date },
    isDialogOpen
  },
  closeDialog,
  setSchedule
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
        <DialogActions>
            <div className={styles.closeButton}>
                <IconButton onClick={closeDialog} size="small">
                    <Close />
                </IconButton>
            </div>
        </DialogActions>
        <DialogContent>
            <Title
                value={title}
                onChange={e => setSchedule({ title: e.target.value })}
                autoFocus
                fullWidth
                placeholder="タイトルと日時を追加"
            />
            <Grid container spacing={1} alignItems="center" justify="space-between">
                <Grid item>
                    <AccessTime />
                </Grid>
                <Grid item xs={10}>
                    <DatePicker
                        value={date}
                        onChange={d => setSchedule({ date: d })}
                        variant="inline"
                        format="YYYY年M月D日"
                        animateYearScrolling
                        disableToolbar
                        fullWidth
                        style={spacer}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" justify="space-between">
                <Grid item>
                    <LocationOnOutlined />
                </Grid>
                <Grid item xs={10}>
                <TextField
                    value={location}
                    onChange={e => setSchedule({ location: e.target.value })}
                    style={spacer}
                    fullWidth
                    placeholder="場所を追加"
                />
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" justify="space-between">
                <Grid item>
                    <NotesOutlined />
                </Grid>
                <Grid item xs={10}>
                <TextField
                    value={description}
                    onChange={e => setSchedule({ description: e.target.value })}
                    style={spacer}
                    fullWidth
                    placeholder="説明を追加"
                />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button color="primary" variant="outlined">
                保存
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;