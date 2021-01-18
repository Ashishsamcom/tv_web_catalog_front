import { Toolbar, Typography, makeStyles, AppBar } from '@material-ui/core';
import React from "react"
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        backgroundColor: "#00000",
        position: 'fixed'
    }
});


export default function Header() {
    // Header custome component

    const classes = useStyles();

    //UI rednder
    return (
        <AppBar className={classes.header} >
            <Toolbar>
                <Link
                    to={`/`}
                    style={{
                        textDecoration: 'none',
                        color: '#ffffff'
                    }}
                >
                    <Typography>TV Web Catalog</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}