import { makeStyles, Typography } from '@material-ui/core';
import React from "react"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import tvImg from '../tvImg.jpg'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTvs } from '../store/actions/tvList';

const useStyles = makeStyles({
    // style 

    root: {
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: '5%',
    },
    descriptionRoot: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex'
    },
    titleDiv: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    titleTxt: {
        fontSize: 35,
        color: "#001222"
    },
    container: {
        maxHeight: 540,
        '& .MuiTable-stickyHeader': {
            borderCollapse: 'collapse',
        },
    },
    img: {
        height: '80%',
        width: '90%'
    },
    nameTxt: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingBottom: 15
    },
    price: {
        fontSize: 20,
        paddingBottom: 15
    },
    descriptionTxt: {
        fontSize: 17,
        paddingTop: 15,
        marginBottom: '80px'
    }

});



export default function TvDetailContainer(props) {
    // custome component for details of tv
    const classes = useStyles();
    const dispatch = useDispatch();

    const tvId = props.tvId;
    const { tvList } = useSelector((state) => state.tvs);


    useEffect(() => {
        fetchTvsApi();
    }, []);

    const fetchTvsApi = async () => {
        // Api call for list of tvs
        dispatch(fetchTvs());
    };

    // filter selected tv with id 
    var data = tvList.find(data => data._id === tvId)

    //UI render
    return (
        <div className={classes.root}>
            <div className={classes.titleDiv} >
                <Typography className={classes.titleTxt} >Detail page</Typography>
            </div>
            <div className={classes.descriptionRoot} >
                <Grid xs={4} >

                    <Box flexDirection="column" display="flex" >
                        <img src={tvImg} alt={"tv"} className={classes.img} />
                    </Box>

                </Grid>
                {
                    data && <Grid xs={8} >
                        <Typography className={classes.nameTxt} >{data.name}</Typography>
                        <Typography className={classes.price}>Modal: {data.modal}</Typography>
                        <Typography className={classes.price}>Brandname: {data.brand_name}</Typography>
                        <Typography className={classes.price}>Star: {data.star}</Typography>
                        <Typography className={classes.price}>Price: ${data.price}</Typography>
                    </Grid>
                }
            </div>
            {
                data && <Grid xs={12} >
                    <Typography className={classes.descriptionTxt} >Description: {data.description}</Typography>
                </Grid>
            }

        </div>
    )
}