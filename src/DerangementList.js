import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const DerangementList = ({ derangement }) =>
    <List>
        {derangement.map(name =>
            <ListItem>
                <ListItemText primary={name} />
            </ListItem>
        )}
    </List>

export default DerangementList