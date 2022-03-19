import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const MyAppBar = () =>
    <AppBar style={{ position: "sticky" }}>
        <Toolbar>
            <Typography variant="h6">
                Powerpoint Night
            </Typography>
        </Toolbar>
    </AppBar>
export default MyAppBar