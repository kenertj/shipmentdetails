
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Box, Typography, TextField, Button } from '@mui/material'


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
        <Box>
            <Typography sx={{
                textTransform: 'uppercase'
            }}>
                Shipment Details
            </Typography>
            <Typography sx={{

            }}>
                orderNo
            </Typography>
            <TextField id="filled-basic" variant="filled" value={orderNo} onChange={(e) => setorderNo(e.target.value)} />
            <Typography sx={{

            }}>
                date
            </Typography>
            <TextField id="filled-basic" variant="filled" value={date} onChange={(e) => setDate(e.target.value)} />
            <Typography sx={{

            }}>
                customer
            </Typography>
            <TextField id="filled-basic" variant="filled" value={customer} onChange={(e) => setCustomer(e.target.value)} />
            <Typography sx={{

            }}>
                trackingNo
            </Typography>
            <TextField id="filled-basic" variant="filled" value={trackingNo} onChange={(e) => setTrackingNo(e.target.value)} />
            <Typography sx={{

            }}>
                consignee
            </Typography>
            <TextField id="filled-basic" variant="filled" value={consignee} onChange={(e) => setConsignee(e.target.value)} />
            <Typography sx={{

            }}>
                status
            </Typography>
            <TextField id="filled-basic" variant="filled" value={status} onChange={(e) => setStatus(e.target.value)} />
            <Button variant="contained" onClick={(e) => handleUpdate(e)}>Update</Button>
        </Box>
    )
}

export default Edit