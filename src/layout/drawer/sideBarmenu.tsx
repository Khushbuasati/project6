import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { useTheme } from '@mui/material/styles';
import SubText from '../../UIComponents/subText';
import { menuList } from '../../data/drawerMenu';

export default function SideBarMenu() {
    const theme = useTheme();
    const [menuOpenIndex, setMenuOpenIndex] = useState<number>(0);
    const [selectedMenuItemDetails, setSelectedMenuItemDetails] = useState<any>({ parentMenuIndex: 0, subMenuIndex: 1 });

    const handleMenuChange = (index: number) => {
        setMenuOpenIndex((prev: number) => prev === index ? -1 : index);
    };

    const handleMenuItemChange = (parentIndex: number, subMenuItemIndex: number) => {
        setSelectedMenuItemDetails({
            parentMenuIndex: parentIndex, subMenuIndex: subMenuItemIndex
        });
    };

    const isSelected = (index: number, subItemIndex: number) => {
        return index === selectedMenuItemDetails.parentMenuIndex && subItemIndex === selectedMenuItemDetails.subMenuIndex;
    }

    return (
        <Box sx={{ overflow: 'auto', height: '60vh', marginTop: '1rem' }}>
            <List>
                {menuList.map((item: any, index: number) => (
                    <>
                        <ListItem
                            key={item.id}
                            disablePadding
                            sx={{ bgcolor: menuOpenIndex === index ? theme.palette.primary.dark : theme.palette.primary.main }}
                        >
                            <ListItemButton onClick={() => handleMenuChange(index)}>
                                <ListItemIcon sx={{ minWidth: '29px' }}>
                                    <item.Icon fontSize="small" color='secondary'
                                        sx={{
                                            position: 'absolute',
                                            width: 30,
                                            height: 30,
                                            backgroundColor: menuOpenIndex === index ? theme.palette.secondary.light : theme.palette.primary.dark,
                                            left: '6px',
                                            top: '10px',
                                            borderRadius: '65% 35% 55% 45% / 30% 35% 65% 70%',
                                            bottom: 0,
                                            padding: '7px'
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={<SubText details={item.name} style={{ fontSize: '14px' }} />} />
                                {menuOpenIndex > -1 && menuOpenIndex === index ? <ExpandMoreIcon fontSize='small' color='secondary' /> : <KeyboardArrowRightOutlinedIcon fontSize='small' color='secondary' />}
                            </ListItemButton>
                        </ListItem>
                        {
                            menuOpenIndex > -1 && menuOpenIndex === index && item.list?.map((listItem: any, subItemIndex: number) => (
                                <>
                                    <ListItem
                                        key={item.id}
                                        sx={{
                                            bgcolor: isSelected(index, subItemIndex) ? theme.palette.primary.contrastText : theme.palette.primary.main,
                                            padding: '2px 16px'
                                        }}
                                    >
                                        <ListItemButton
                                            onClick={() => handleMenuItemChange(index, subItemIndex)}
                                            sx={{ paddingTop: '3px', paddingBottom: '3px' }}
                                        >
                                            <ListItemIcon sx={{ minWidth: '20px' }}>
                                                <PlayArrowOutlinedIcon color='secondary' sx={{ fontSize: '16px' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<SubText details={listItem} style={{ fontSize: '13px' }} />} />
                                        </ListItemButton>
                                    </ListItem>
                                </>
                            ))
                        }
                    </>
                ))}
            </List>
        </Box>
    );
}