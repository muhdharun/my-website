import React from 'react'
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
import citi from '../images/citi.jpg'
import angelhack from '../images/angelhack.jpg'

export const Experiences = () => {
    return (
        <Box component="div">
            <Navbar />
            <br></br>
            <br></br>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="AngelHack Vietnam 2019" height="350" image={angelhack}/>
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    AngelHack Ho Chi Minh 2019
                                </Typography>
                                <br></br>
                                <Typography paragraph>
                                    I joined this with my roommates and some other students during our time in the NUS Overseas College (NOC) Vietnam program, in June.
                                </Typography>
                                <Typography paragraph>
                                    Seeing how this was some of our first time joining a hackathon, my team decided to be a bit more laidback during this event.
                                </Typography>  
                                <Typography paragraph>
                                    There were several themes to choose from, but we chose the IBM's Call for Code challenge. We had to come up with a solution which would help anyone or any group in times of natural disasters.
                                </Typography>
                                <Typography paragraph>
                                    Our solution made use of IBM's facial recognition API as a way to record those who were admitted into refugee camps. We made some UI Mockups of the app which would make use of this API.
                                </Typography>
                                <Typography paragraph>
                                    The idea we had was to integrate the facial recognition API with a government database so that we would know who are already in camps.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <br></br>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" alt="Citi Singapore Hackathon 2019" height="350" image={citi}/>
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Citi Singapore Hackathon 2019
                                </Typography>
                                <br></br>
                                <Typography paragraph>
                                    In the recess week of Year 3 Semester 1, some friends and I joined the Citi Hackathon 2019.
                                </Typography>
                                <Typography paragraph>
                                    The theme for this, "digitalising social services platforms", was already pre-defined for this hackathon, so we couldn't choose what we had to do.
                                    Participants would be split into 4 groups and each group would be further split into smaller sub groups, each handling a different aspect of the main application.
                                    My team had to handle the communications aspect. 
                                </Typography>  
                                <Typography paragraph>
                                    The task was to develop a webapp that would help social services in managing volunteers before an event started, similar to what Bantu is doing. By the end of it, all sub teams would have to integrate their respective parts so that it becomes a proper application.
                                </Typography>
                                <Typography paragraph>
                                    Some examples of the things we did included making use of Node.js (SendGrid, cron jobs) and MySQL to automate sending email reminders to volunteers at specific times before the actual event started as well as 
                                    adding new volunteers to the database.
                                </Typography>
                                <Typography paragraph>
                                    This was quite a challenging event as we also had to coordinate with the other teams so that the integration process would be smooth. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>            
        </Box >
    )
}

export default Experiences