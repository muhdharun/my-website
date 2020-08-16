import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'
import Typed from "react-typed"
import profile from "../profile2.png"

// CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato",
        fontFamily: "Verdana"
    },
    subtitle: {
        color: "mediumblue",
        marginBottom: "3rem",
        fontFamily: "Verdana",
        fontWeight: "Bold" 
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex:1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={profile} alt="Muhammad Harun Abdul Rashid"/>
            </Grid>
            
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Muhammad Harun Abdul Rashid"]} typeSpeed={20} />
            </Typography>  
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Computer Engineering","National University of Singapore"]} typeSpeed={20} backSpeed={10} loop/>
            </Typography>
        </Box>
    )
}

export default Header
