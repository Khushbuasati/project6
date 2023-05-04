import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material/styles';
import { list } from '../../data/tabs';
import Title from '../../UIComponents/title';

export default function TabsRoot() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: '100%',
            bgcolor: 'background.paper',
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {list.map((item: any, index: number) => (
                    <Tab label={
                        <Title
                            title={<>
                                <item.icon
                                    sx={{
                                        fontSize: value === index ? '16px' : '14px',
                                        marginRight: '5px'
                                    }}
                                /> {item.name}<KeyboardArrowDownIcon sx={{ fontSize: '16px', marginLeft: '5px' }} /></>}
                            style={{
                                textTransform: 'capitalize',
                                fontSize: '12px',
                                fontWeight: 'normal',
                                display: 'flex',
                                alignItems: 'center',
                                color: value === index ? theme.palette.primary.main : theme.palette.common.black,
                            }}
                        />
                    } />
                ))}
            </Tabs>
        </Box>
    );
}
