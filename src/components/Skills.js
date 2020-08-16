import React from 'react'
import clsx from 'clsx'
import Navbar from './Navbar'
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },

    root: {
        minWidth: 275
    },
    title: {
        fontSize: 28,
      },

    }))

const Skills = () => {
    const classes = useStyles();
    return (
        <Box component="div">
            <Navbar/>
            <br></br>
            <br></br>
            <Typography variant="h4" align="center" className={classes.heading}>
                Skill Sets
            </Typography>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.title}>
                        <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Programming Languages
                        </Typography>
                        <Typography>
                            C, C++, C#, Python, Java, Excel VBA
                        </Typography>
                        </CardContent>
                    </Card>
                    <br></br> 
                    <Card className={classes.title}>
                        <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Machine Learning/Computer Vision/Data Science
                        </Typography>
                        <Typography>
                            Python - Pandas, OpenCV, Numpy 
                        </Typography>
                        </CardContent>
                    </Card>
                    <br></br> 
                    <Card className={classes.title}>
                        <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Database
                        </Typography>
                        <Typography>
                            SQL - PostgreSQl, MySQL, Microsoft SQL,
                            Microsoft Access
                        </Typography>
                        </CardContent>
                    </Card>
                    <br></br> 
                    <Card className={classes.title}>
                        <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Robotic Process Automation (RPA)    
                        </Typography>
                        <Typography>
                            UiPath
                        </Typography>
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card className={classes.title}>
                        <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Spoken/Written Languages   
                        </Typography>
                        <Typography>English</Typography>
                        <Typography>Malay (Mother Tongue)</Typography>
                        <Typography>Arabic (Average proficiency)</Typography>
                        </CardContent>
                    </Card>           
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default Skills
