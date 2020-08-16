import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import Navbar from "./Navbar"
import { mergeClasses } from '@material-ui/styles'
import schneider from '../images/schneider.jpg'
import noc from '../images/noc.jpg'
import labs from '../images/4xlabs.jpg'

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#233"
    },
    timeLine:{
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after":{
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    },
    media: {
        height: "50%",
        width: "100%",
    }

}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar />
        <Box component="header" className={classes.mainContainer} >
            <br></br>
            <br></br>
            <Typography variant="h4" align="center" className={classes.heading}>
                Job experiences
            </Typography>
            <Box component="div" className={classes.timeLine}>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2020</Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        IT Analyst Intern
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato", fontWeight: "bold", textDecoration: "underline"}}>
                        Schneider Electric
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        January 2020 - July 2020
                    </Typography>
                    <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                        <ul>
                            <li>Interned under Schneider Digital</li>
                            <li>Focused on innovation, data visualization and automation</li>
                            <li>UiPath and VBA related projects:</li>
                            <ol>
                                <li>Automated and digitalized asset (laptop) management for Tech Partners (IT helpdesk)</li>
                                <li>Automated Savings Report and other procurement processes for Procurement team</li>
                            </ol>
                            <li>Used Microsoft SQL to check with a Tableau dashboard to count the current building occupancy (for Covid measures)</li>
                            <li>Planned curriculum and taught a 3-part course on UiPath RPA to Schneider Electric staff</li>
                            <li>Participated in an intern-led project (‘Reverse Mentoring’) to find ways to increase Cybersecurity awareness in the company</li>
                        </ul>
                        <img src={schneider} alt="Schneider Electric" className={classes.media}></img>
                    </Typography>
                    
                </Box>
                <br></br>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Undergraduate Teaching Assistant
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato", fontWeight: "bold", textDecoration: "underline"}}>
                        National University of Singapore
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        March 2020 - May 2020
                    </Typography>
                    <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                        <ul>
                            <li>TA-ed a group of 14 non-graduating students for IT5003 (Data Structures and Algorithm in Python)</li>
                            <li>Held weekly tutorial/lab sessions</li>
                            <li>Held weekly consultation sessions outside of tutorial hours (as curriculum is covered in 2 instead of usual 4 months)</li>
                            <li>Graded lab assignments when needed</li>
                        </ul>
                    </Typography>
                </Box>
                <br></br>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019</Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       Backend Engineering Intern
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato", fontWeight: "bold", textDecoration: "underline"}}>
                        4xLabs (Ho Chi Minh, Vietnam Office)
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        May 2019 - August 2019
                    </Typography>
                    <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                        (More on my internship experience at this 4xLabs blog <a href="https://4xlabs.co/press/my-experience-backend-engineering-intern-4xlabs-ho-chi-minh-city.html" target="_blank" rel="noopener noreferrer">post</a>)
                        <ul>
                            <li>Internship was part of NUS Overseas College (NOC) Southeast Asia Program</li>
                            <li>Worked on Biz4x, software for money changers and banks to manage foreign currency (FC) stock, transactions,
                        etc</li>
                            <li>Made the SQL queries to generate regulatory reports (in Excel form) such as for transactions and FC stocks for Indonesian clients and made existing queries more readable for future use</li>
                            <li>Made documentation for the Indonesian reports and ERD for current database used</li>
                            <li>Worked with .Net Core framework and C# and drafted out new APIs for generating Excel reports</li>
                            <li>Did product management and testing in the initial part of internship </li>
                        </ul>
                        <img src={labs} alt="4xLabs Vietnam" className={classes.media}></img>
                        <img src={noc} alt="NOC Vietnam" className={classes.media}></img>   
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                       Undergraduate Lab Teaching Assistant (TA)
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato", fontWeight: "bold", textDecoration: "underline"}}>
                        National University of Singapore
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        January 2019 - May 2019
                    </Typography>
                    <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                        <ul>
                            <li>TA-ed 2 separate groups of 10 students</li>
                            <li>For module CG1112 (Engineering Principles and Practices II)</li>
                            <li>Assisted the professor in facilitating lab sessions twice a week</li>
                            <li>Examples of content covered: Git basics, Baremetal programming, ROS and Demo-ed skills when needed such as soldering</li>
                        </ul>
                    </Typography>
                </Box>              
               <br></br>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2015</Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Airport Patrol Officer
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato", fontWeight: "bold", textDecoration: "underline"}}>
                        Airport Police Division (Singapore Police Force)
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        March 2015 - March 2017
                    </Typography>
                    <Typography variant="subtitle1" align="left" style={{color: "tan"}}>
                        <ul>
                            <li>2-year mandatory National Service</li>
                            <li>Served as a Sergeant (Special Constable)</li>
                            <li>Conducted regular and specialized patrols and attended to cases when dispatched</li>
                            <li>Did duty office and report-lodging duties at the main station and airport terminals</li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Resume
