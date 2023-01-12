import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Grid} from '@mui/material';
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";

function GitHubCard({organization}) {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/pierre370/repos`)
            .then(response => setRepos(response.data))
            .catch(error => console.log(error));
    }, [organization]);

    if (!repos.length) {
        return <p>Loading...</p>;
    }
    console.log(repos)
    return (
        <div>

                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(7)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Card key={repos[index].id} sx={{maxWidth: 345}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaAwyy8hwniGae-Yr7qNdX0YqT6e55S6SIg&usqp=CAU"
                                            alt="Github Logo"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {repos[index].name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button href={repos[index].html_url} target={"_blank"} size="small" color="primary">
                                            Voir sur GitHub
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

        </div>
    );
}

export default GitHubCard;