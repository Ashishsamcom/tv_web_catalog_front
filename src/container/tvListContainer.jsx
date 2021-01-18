import { makeStyles } from '@material-ui/core';
import React, { useEffect } from "react"
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    // style

    root: {
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    container: {
        maxHeight: 540,
        '& .MuiTable-stickyHeader': {
            borderCollapse: 'collapse',
        },
        marginTop: '1%'
    },
    tableHeader: {
        background: "#00203c",
        color: 'white',
        padding: 18,
        fontWeight: 600,
    },
    lableColor: {
        color: "#000312",
    },
    cellDecription: {
        color: "#121212",
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
    },
    searchGrid: {
        marginTop: '70px',
        flex: 1,
        display: 'flex'
    },
});


export default function TvListContainer(props) {
    // custome component for tv listing 

    const classes = useStyles();
    const [data, setData] = React.useState(props.data)
    const [searchValue, setSearchValue] = React.useState("")

    useEffect(() => {
        setData(props.data)
    }, [props.data]);

    const searchUser = (event) => {
        // searching logic

        setSearchValue(event.target.value)

        var temp_data = data
        var searcjQery = event.target.value.toLowerCase();

        var filterdArray = temp_data.filter((el) => {
            let searchValue = `${el.name.toLowerCase()}`
            return searchValue.indexOf(searcjQery) !== -1;
        })
        setData(filterdArray)

        if (!event.target.value) {
            setData(props.data)
        }
    }

    // UI render
    return (
        <div className={classes.root}>
            <Grid xs={12}>
                <Grid container>
                    <Grid xs={12} className={classes.searchGrid}>
                        <input
                            value={searchValue}
                            placeholder={"Search"}
                            onChange={searchUser}
                            style={{
                                height: 24,
                                backgroundColor: "#FFFFFF",
                                paddingLeft: 8,
                                paddingRight: 8,
                                border: "1px solid #2F6390",
                                width: '15%',
                                marginLeft: 'auto'
                            }}>
                        </input>
                    </Grid>

                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableHeader} align="center">
                                        #
                    </TableCell>
                                    <TableCell className={classes.tableHeader} align="center">
                                        Name
                    </TableCell>
                                    <TableCell className={classes.tableHeader} align="center">
                                        Modal
                    </TableCell>

                                    <TableCell className={classes.tableHeader} align="center">
                                        Price
                    </TableCell>
                                    <TableCell className={classes.tableHeader} align="center">
                                        View
                    </TableCell>
                                    <TableCell className={classes.tableHeader} align="center">
                                        Buy
                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data.map((row, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell
                                                className={classes.lableColor}
                                                align="center"
                                            >
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="center">
                                                <div className={classes.cellDecription}>
                                                    {row.name}
                                                </div>
                                            </TableCell>
                                            <TableCell align="center" style={{ width: 300 }}>
                                                {row.model_No}
                                            </TableCell>

                                            <TableCell style={{}} align="center">
                                                <div className={classes.cellDecription}>
                                                    {row.price}
                                                </div>
                                            </TableCell>
                                            <TableCell
                                                className={classes.lableColor}
                                                align="center"
                                            >
                                                <Box display="flex" justifyContent="center">
                                                    <Link
                                                        to={`/tvs/${row._id}`}
                                                        style={{
                                                            textDecoration: 'none',
                                                        }}
                                                    >
                                                        <div className={classes.goDiv}>
                                                            <div className={classes.goIcon}>GO</div>
                                                        </div>
                                                    </Link>
                                                </Box>
                                            </TableCell>
                                            <TableCell
                                                className={classes.lableColor}
                                                align="center"
                                            >
                                                <Box display="flex" justifyContent="center">
                                                    <Link
                                                        to={`/thankyou`}
                                                        style={{
                                                            textDecoration: 'none',
                                                        }}
                                                    >
                                                        <div className={classes.goDiv}>
                                                            <div className={classes.goIcon}>+</div>
                                                        </div>
                                                    </Link>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div >
    )
}