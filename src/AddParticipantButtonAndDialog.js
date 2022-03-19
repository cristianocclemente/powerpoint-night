import { useState } from 'react';

import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';

import AddIcon from '@mui/icons-material/Add';

const AddParticipantButtonAndDialog = ({ addParticipant }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleOpenDialog = () => setIsDialogOpen(true);
    const handleCloseDialog = () => {
        setName("")
        setIsDialogOpen(false);
    }
    const handleAddButton = () => {
        addParticipant(name)
        handleCloseDialog();
    }

    const [name, setName] = useState("");
    const handleNameChange = (event) => setName(event.target.value);

    return (
        <>
            <Fab color="primary" style={{ position: 'absolute', bottom: 16, left: 16 }} onClick={handleOpenDialog}>
                <AddIcon />
            </Fab>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>Add Participant</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        fullWidth
                        variant="standard"
                        value={name}
                        onChange={handleNameChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleAddButton}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddParticipantButtonAndDialog