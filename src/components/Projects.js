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
import Collapse from '@material-ui/core/Collapse';
import {makeStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '@material-ui/icons/GitHub'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import vincent from '../images/vincent.jpg'
import prism from '../images/prism.png'
import ml from '../images/ml.jpg'
import cauldron from '../images/cauldron.jpg'
import { ExpandLessRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }));

const Projects = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [expandedTwo, setExpandedTwo] = React.useState(false);
    const [expandedThree, setExpandedThree] = React.useState(false);
    const [expandedFour, setExpandedFour] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleExpandClickTwo = () => {
        setExpandedTwo(!expandedTwo);
    }

    const handleExpandClickThree = () => {
        setExpandedThree(!expandedThree);
    }

    const handleExpandClickFour = () => {
        setExpandedFour(!expandedFour);
    }

    const handlePrismGithubClick = (e) => {
        e.preventDefault();
        window.open("https://github.com/muhdharun/Main", "_blank")
        
    }

    const handleMlGithubClick = (e) => {
        e.preventDefault();
        window.open("https://github.com/muhdharun/CS3244_Project/blob/master/KNN.ipynb", "_blank")
        
    }

    const handleCauldronGithubClick = (e) => {
        e.preventDefault();
        window.open("https://github.com/muhdharun/CauldronOrbital", "_blank")
        
    }

    return (
        <Box component="div">
            <Navbar />
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Vincent the robot" height="200" image={vincent}/>
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Vincent to the Rescue
                                </Typography>
                                <Typography variant="h5" color="textSecondary" component="p">
                                    Robotics project 
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    (Repo still kept private) 
                                </Typography>
                                <br></br>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    The aim of this project was to program a SLAM robot to navigate in an unknown maze by sending movement command packets. After reaching the endpoint, the bot was to autonomously backtrack to the starting point.
                                </Typography>                               
                            </CardContent>
                            <CardActions>
                                <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>
                                    The bot was controlled by a Raspberry Pi 3 and the motors were controlled by an Arduino Uno board. The bot was also equipped with a LIDAR to send information on the maze back to the team
                                </Typography>
                                <Typography paragraph>Contributions:</Typography>
                                <Typography paragraph>Set up TCP/IP protocol (communication between controller's laptop and Raspberry Pi)</Typography>
                                <Typography paragraph>Setting up motor controls and calibration (Arduino side)</Typography>
                                <Typography paragraph>Contributed to backtracking algorithms</Typography>
                                </CardContent>
                            </Collapse>
                        </CardActionArea>
                    </Card>
                    <br></br>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="PRISM" height="200" image={prism}/>
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    PRISM: Police Records and Intelligence System
                                </Typography>
                                <Typography variant="h5" color="textSecondary" component="p">
                                    Software Engineering Project (Java)
                                </Typography>
                                <Typography>
                                    Code contributed: [<a href="https://github.com/CS2113-AY1819S1-F10-3/main/blob/master/collated/functional/muhdharun.md" target="_blank">Functional code</a>]
                                    [<a href="https://github.com/CS2113-AY1819S1-F10-3/main/blob/master/collated/test/muhdharun.md" target="_blank">Test code</a>]
                                </Typography>
                                <br></br>
                                <Typography variant="body1" color="textSecondary" component="p">
                                PRISM is an adaptation of the already existing Address-Book 3 (AB3) program by SE EDU. It is a
                                program targeted for Police Officers (PO) and Headquarters Personnel (HQP) varying access and authorization levels to the different features 
                                of this system.                                
                                </Typography>                               
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="view on GitHub" onClick={handlePrismGithubClick}>
                                    <GithubIcon/>
                                </IconButton>
                                <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expandedTwo,})} onClick={handleExpandClickTwo} aria-expanded={expandedTwo} aria-label="show more">
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expandedTwo} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>
                                POs would be able to read from the database after screening a civilian (known as a subject) and decide his
                                next course of action based on the criminal status of the subject. HQPs would have the authority to
                                conduct more thorough checks and remove people from the system if needed. This project was developed
                                to enhance the crime handling capabilities of the Police Force
                                </Typography>
                                <Typography paragraph>Contributions:</Typography>
                                <Typography paragraph>Set up Codecov to check for test coverage</Typography>
                                <Typography paragraph>Morphed commands and person objects from addressbook to suit PRISM</Typography>
                                </CardContent>
                            </Collapse>
                        </CardActionArea>
                    </Card>
                    <br></br>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="ML" height="200" image={ml}/>
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Kickstarters: Make or Break?
                                </Typography>
                                <Typography variant="h5" color="textSecondary" component="p">
                                    Machine Learning Project
                                </Typography>
                                <br></br>
                                <Typography variant="body1" color="textSecondary" component="p">
                                The aim of this was to find out what makes a Kickstarter project successful and predict the success of ongoing ones through Machine Learning algorithms. Our team used several including Naive Bayes,K-nearest Neighbours(KNN) and Neural Networks                               
                                </Typography>                               
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="view on GitHub" onClick={handleMlGithubClick}>
                                    <GithubIcon/>
                                </IconButton>
                                <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expandedThree,})} onClick={handleExpandClickThree} aria-expanded={expandedThree} aria-label="show more">
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expandedThree} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>
                                I worked with a teammate to use KNN on a dataset of Kickstarter projects retrieved from Kaggle. One of the hypothesis we wanted to test was if the way one phrases the title of the project affects the success rate. For e.g, use of punctuation and length of title 
                                </Typography>
                                <Typography paragraph>Contributions:</Typography>
                                <Typography paragraph>Pre-processed Data to concatenate multiple CSV files of data</Typography>
                                <Typography paragraph>Filtered and processed Data (only worked on ongoing kickstarters) to categorize the titles of the Kickstarter Projects</Typography>
                                <Typography paragraph>Used Grid Search to find out optimal K (from 1 to 9)</Typography>
                                </CardContent>
                            </Collapse>
                        </CardActionArea>
                    </Card>
                    <br></br>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Cauldron" height="300" image={cauldron}/>
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Cauldron
                                </Typography>
                                <Typography variant="h5" color="textSecondary" component="p">
                                    Software Engineering Project (Unity App)
                                </Typography>
                                <Typography>
                                    Get the APK file [<a href="https://www.dropbox.com/s/xjgl72u97xru61w/Cauldronappfinal.apk?dl=0" target="_blank">Here</a>]
                                </Typography>
                                <br></br>
                                <Typography variant="body1" color="textSecondary" component="p">
                                This was the first SE project I worked on through an Independent Summer module (Orbital). It is a recipe-generating app, based on the user's ingredient inputs.                               
                                (Hence, some parts of the coding style may not comply with proper Software Engineering Principles)
                                </Typography>                               
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="view on GitHub" onClick={handleCauldronGithubClick}>
                                    <GithubIcon/>
                                </IconButton>
                                <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expandedFour,})} onClick={handleExpandClickFour} aria-expanded={expandedFour} aria-label="show more">
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expandedFour} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>
                                We used Unity, C# and Firebase for the database and the authentication tool. 
                                </Typography>
                                <Typography paragraph>Contributions:</Typography>
                                <Typography paragraph>Set up Firebase Database and Authentication</Typography>
                                <Typography paragraph>Made algorithm to generate the recipes based on input</Typography>
                                <Typography paragraph>Set up UI for input and selection</Typography>
                                </CardContent>
                            </Collapse>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects
