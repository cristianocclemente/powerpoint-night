import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ArrowsList = ({ derangement }) =>
    <List>
        {derangement.map(_ =>
            <ListItem>
                <ListItemText primary=">" />
            </ListItem>
        )}
    </List>

export default ArrowsList