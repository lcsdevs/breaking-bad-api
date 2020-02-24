import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Container, Row, Col} from 'reactstrap';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const Characters = ({characters}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container>
            <Row xs="1" sm="2" md="4">
                {characters.map((character) => (
                    <Card className={classes.root}>
                        <CardHeader
                            title={character.name}
                            subheader={character.portrayed}
                        />
                        <CardMedia
                            className={classes.media}
                            image={character.img}
                        />
                        <CardActions disableSpacing>

                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="Detalhes"
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Ficha</Typography>
                                <Typography paragraph>
                                    Birthday: {character.birthday}
                                </Typography>
                                <Typography paragraph>
                                    Occupation: {character.occupation + " "}
                                </Typography>
                                <Typography paragraph>
                                    Nickname: {character.nickname}
                                </Typography>
                                <Typography>
                                    Status: {character.status}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>))}
            </Row>
        </Container>
    );
};

export default Characters
