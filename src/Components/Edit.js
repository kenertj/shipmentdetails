
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Box, Typography, TextField, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';


const Edit = (props) => {
    const [orderNo, setorderNo] = useState("");
    const [date, setDate] = useState("");
    const [customer, setCustomer] = useState("");
    const [trackingNo, setTrackingNo] = useState("");
    const [status, setStatus] = useState("");
    const [consignee, setConsignee] = useState("");

    let history = useNavigate();

    const index = props.post.map(function (e) {
        return e.orderNo
    }).indexOf(orderNo);

    const handleUpdate = (e) => {
        e.preventDefault();
        let a = props.post[index];
        a.orderNo = orderNo;
        a.date = date;
        a.customer = customer;
        a.trackingNo = trackingNo;
        a.status = status;
        a.consignee = consignee;


        history('/')
    }

    useEffect(() => {
        setorderNo(localStorage.getItem('OrderNo'))
        setDate(localStorage.getItem('Date'))
        setCustomer(localStorage.getItem('Customer'))
        setTrackingNo(localStorage.getItem('TrackingNo'))
        setStatus(localStorage.getItem('Status'))
        setConsignee(localStorage.getItem('Consignee'))


    }, [])


    return (
        <Box sx={{

        }}>
            <Box sx={{
                margin: '15vh auto',
                maxWidth: '1100px',
                background: '#f2f4f9',

            }}>
                <Grid container spacing={2} sx={{
                    ml: '2vh'
                }}>
                    <Grid xs={12}>
                        <Typography sx={{
                            textTransform: 'uppercase',
                            mt: '5vh',
                            ml: '3vh',
                            fontSize: '0.75rem',
                            letterSpacing: '2px',
                            color: '#8898aa',
                            fontWeight: '650'
                        }}>
                            Shipment Details
                        </Typography>
                    </Grid>

                    <Grid xs={6}>
                        <Typography sx={{
                            color: '#525f7f',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            orderNo
                        </Typography>
                        <TextField id="filled-basic" variant="filled" value={orderNo} onChange={(e) => setorderNo(e.target.value)} sx={{
                            width: '90%',
                            input: {
                                color: "#8898aa",
                            }
                        }} />
                    </Grid>
                    <Grid xs={6}>
                        <Typography sx={{
                            color: '#525f7f',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            date
                        </Typography>
                        <TextField id="filled-basic" variant="filled" value={date} onChange={(e) => setDate(e.target.value)} sx={{
                            width: '90%',
                            input: {
                                color: "#8898aa",
                            }
                        }} />
                    </Grid>
                    <Grid xs={6}>
                        <Typography sx={{
                            color: '#525f7f',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            customer
                        </Typography>
                        <TextField id="filled-basic" variant="filled" value={customer} onChange={(e) => setCustomer(e.target.value)} sx={{
                            width: '90%',
                            input: {
                                color: "#8898aa",
                            }
                        }} />
                    </Grid>
                    <Grid xs={6}>
                        <Typography sx={{
                            color: '#525f7f',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            trackingNo
                        </Typography>
                        <TextField id="filled-basic" variant="filled" value={trackingNo} onChange={(e) => setTrackingNo(e.target.value)} sx={{
                            width: '90%',
                            input: {
                                color: "#8898aa",
                            }
                        }} />
                    </Grid>
                    <Grid xs={6}>
                        <Typography sx={{
                            color: '#525f7f',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            consignee
                        </Typography>
                        <TextField id="filled-basic" variant="filled" value={consignee} onChange={(e) => setConsignee(e.target.value)} sx={{
                            width: '90%',
                            input: {
                                color: "#8898aa",
                            }
                        }} />
                    </Grid>
                    <Grid xs={6}>
                        <Typography sx={{
                            color: '#525f7f',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            status
                        </Typography>
                        <TextField id="filled-basic" variant="filled" value={status} onChange={(e) => setStatus(e.target.value)} sx={{
                            width: '90%',
                            input: {
                                color: "#8898aa",
                            },


                        }} />
                    </Grid>
                    <Grid xs={12}>
                        <Box sx={{
                            margin: '0 auto',
                            width: '550px'
                        }}>
                            <Button variant="contained" onClick={(e) => handleUpdate(e)} sx={{
                                backgroundColor: '#11cdef',
                                width: '100%',
                                ml: '-2vh',
                                mt: '2vh'


                            }}>Update</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Edit