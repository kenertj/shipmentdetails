import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ClearIcon from '@mui/icons-material/Clear';

function ShipmentData() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0").then((data) => {

            setPost(data?.data);
        });
    }, []);

    const handleDelete = (orderNumber) => {
        const updatedOrders = [...post];
        const index = post.findIndex((order) => order.orderNo === orderNumber);

        updatedOrders.splice(index, 1);

        setPost(updatedOrders);

    }

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{
                        backgroundColor: '#f6f9fc',


                    }}>
                        <TableRow>

                            <TableCell sx={{
                                fontSize: '0.6rem',
                                letterSpacing: '2px',
                                color: '#8898aa',
                                fontWeight: '650'

                            }}>ORDERNO</TableCell>
                            <TableCell align="left" sx={{
                                fontSize: '0.6rem',
                                letterSpacing: '2px',
                                color: '#8898aa',
                                fontWeight: '650'

                            }}>DELIVERYDATE</TableCell>
                            <TableCell align="left" sx={{
                                fontSize: '0.6rem',
                                letterSpacing: '2px',
                                color: '#8898aa',
                                fontWeight: '650'

                            }}>CUSTOMER</TableCell>
                            <TableCell align="left" sx={{
                                fontSize: '0.6rem',
                                letterSpacing: '2px',
                                color: '#8898aa',
                                fontWeight: '650'

                            }}>TRACKINGNO</TableCell>
                            <TableCell align="left" sx={{
                                fontSize: '0.6rem',
                                letterSpacing: '2px',
                                color: '#8898aa',
                                fontWeight: '650'

                            }}>STATUS</TableCell>
                            <TableCell align="left" sx={{
                                fontSize: '0.6rem',
                                letterSpacing: '2px',
                                color: '#8898aa',
                                fontWeight: '650'

                            }}>CONSIGNEE</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {post.map((item) => (
                            <TableRow
                                key={item.orderNo}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{
                                    color: '#525f7f',
                                    fontSize: '0.7rem'
                                }}>
                                    {item.orderNo}
                                </TableCell>
                                <TableCell align="left" sx={{
                                    color: '#525f7f',
                                    fontSize: '0.7rem'
                                }}>{item.date}</TableCell>
                                <TableCell align="left" sx={{
                                    color: '#525f7f',
                                    fontSize: '0.7rem'
                                }}>{item.customer}</TableCell>
                                <TableCell align="left" sx={{
                                    color: '#525f7f',
                                    fontSize: '0.7rem'
                                }}>{item.trackingNo}</TableCell>
                                <TableCell align="left" sx={{
                                    color: '#525f7f',
                                    fontSize: '0.7rem'
                                }}>{item.status}</TableCell>
                                <TableCell align="left" sx={{
                                    color: '#525f7f',
                                    fontSize: '0.7rem'
                                }}>{item.consignee}</TableCell>
                                <TableCell align="left">
                                    <Button variant="contained" size="large" sx={{
                                        backgroundColor: '#11cdef',

                                    }}><AssignmentIndIcon fontSize="small" /></Button>

                                </TableCell>
                                <TableCell align="left"><Button variant="contained" size="large" sx={{
                                    backgroundColor: '#f5365c',

                                }} onClick={() => handleDelete(item.orderNo)}><ClearIcon fontSize="small" /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ShipmentData;