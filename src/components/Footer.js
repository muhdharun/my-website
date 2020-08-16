import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWith: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles()

    const handleGithubClick = (e) => {
        e.preventDefault();
        window.open("https://github.com/muhdharun", "_blank")
        
    }

    const handleLinkedInClick = (e) => {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/muhammad-harun-abdul-rashid-40764a172/", "_blank")
        
    }

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<LinkedInIcon/>} onClick={handleLinkedInClick}/>   
            <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<GithubIcon/>} onClick={handleGithubClick}/>
        </BottomNavigation>
    )
}

export default Footer
