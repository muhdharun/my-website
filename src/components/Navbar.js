import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    EmojiEvents,
    PersonOutline,
    ListAlt
} from "@material-ui/icons"
import profile from "../profile.png"
import Footer from "./Footer"

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
    listItem: {
        color:"tan"    
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/my-website"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ListAlt/>,
        listText: "Skills",
        listPath: "/skills"
    },
    {
        listIcon: <EmojiEvents/>,
        listText: "Experiences",
        listPath: "/experiences"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right:false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open});
    }

    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={profile} alt="Muhammad Harun Abdul Rashid"/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath} >
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}    
            </List>
        </Box>
    )
    return (
        <>
        
        <Box component="nav">
         <AppBar position="fixed" style={{background: "#222"}}>
            <Toolbar>
                <IconButton onClick={toggleSlider("right", true)}>
                    <ArrowBack style={{color: "tomato"}}/> 
                </IconButton>
                <Typography variant="h5" style={{color:"tan",fontFamily:"Verdana"}}>
                    More Information
                </Typography>
                <MobilRightMenuSlider open={state.right} anchor="left" onClose={toggleSlider("right", false)}>
                    {sideList("right")}
                    <Footer/>
                </MobilRightMenuSlider>
            </Toolbar>
         </AppBar>
        </Box>
        </>
    )
}

export default Navbar
