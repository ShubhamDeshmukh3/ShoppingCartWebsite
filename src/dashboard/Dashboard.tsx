import { Divider, Grid, Typography } from '@mui/material'
import Header from './header/Header'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MainDashboard from './main-dashboard/MainDashboard';
import aahanalogo from '../assets/aahanalogo.svg'

const Dashboard = () => {
    return (
        <Grid container spacing={2}>
            <Grid container item xs={12} sx={{ backgroundColor: "#f6f6f8" }}>
                <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography><SmartphoneIcon sx={{ fontSize: "small", pt: 1, pr: 1 }} /></Typography>
                    <Typography variant='subtitle2'>+91 81495 55416</Typography>
                </Grid>
                <Grid item xs={10} sx={{ display: "flex", justifyContent: 'flex-start', alignItems: 'center', justifyItems: 'center' }}>
                    <Typography><MailOutlineOutlinedIcon sx={{ fontSize: "small", pt: 1, pr: 1, }} /></Typography>
                    <Typography sx={{ fontSize: 'small' }}>mansi.phatate@gmail.com</Typography>
                </Grid>
                <Divider />
            </Grid>
            <Grid item xs sx={{ px: 2 }}>
                <Header />
                <Divider variant='middle' sx={{ pt: 2 }} />
                <img src={aahanalogo} alt="logo" height={250} />
            </Grid>
            <Grid item xs={12}>
                <MainDashboard />
            </Grid>
        </Grid>
    )
}

export default Dashboard