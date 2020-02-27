import React from 'react'
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CakeIcon from '@material-ui/icons/Cake';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 420,
        minheight:640,
        marginRight: 'auto',
        marginLeft:'auto',
        marginBottom:'30px',
        marginTop:'30px',
        backgroundColor:"#323232"
    },
    media: {
        height: 0,
        width:280,
        marginLeft:'auto',
        marginRight: 'auto',
        marginTop:'auto',
        paddingTop: '99.25%',
        paddingBottom: '30%',
    },
    title:{
        marginLeft:'auto',
        marginRight: 'auto',
    },
    alive: {
        backgroundColor: "#038c1a"
    },
    presumed: {
        backgroundColor: "#ff1100",
    },
    dead:{
        backgroundColor :"#fc8c03"
    },
    unknown:{
        backgroundColor: "#4f4f4f"
    }

}));

const Characters = ({characters}) => {
    const classes = useStyles();

    function statusChar(status) {
        if(status === 'Deceased'){
            return classes.dead
        }else if(status === "Alive"){
            return  classes.alive
        }else if(status === "Presumed dead"){
            return  classes.presumed
        }else{
            return classes.unknown
        }
    }


    return (
        <Box display="flex" flexDirection="row" boxShadow={3} item xl={3}>
            <Grid container >
                    {characters.map((character) => (
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={statusChar(character.status)}>
                                       <LocalHospitalOutlinedIcon/>
                                    </Avatar>
                                }
                                title={
                                    <Box color="#ffffff" className={classes.title}>{character.name}</Box>}
                                subheader={
                                    <Box color="#ffffff" className={classes.title}>{character.portrayed}</Box>}
                            />
                            <CardMedia
                                className={classes.media}
                                image={character.img}
                                title={character.nickname}
                            />
                            <CardContent>
                                <Typography variant="body2" component="p" >
                                   <p><Box color="#ffffff" className={classes.title}><CakeIcon/>{character.birthday}</Box> </p>
                                    <p> <Box color="#ffffff" className={classes.title}>{character.occupation+" "}</Box> </p>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
            </Grid>
        </Box>
    )
};

export default Characters