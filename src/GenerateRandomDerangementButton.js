import Fab from '@mui/material/Fab';
import LoopIcon from '@mui/icons-material/Loop';

const GenerateRandomDerangementButton = ({ generateRandomDerangement }) =>
    <Fab color="secondary" style={{ position: 'absolute', bottom: 16, right: 16 }} onClick={generateRandomDerangement}>
        <LoopIcon />
    </Fab>

export default GenerateRandomDerangementButton