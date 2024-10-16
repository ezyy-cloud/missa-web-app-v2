import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'mui-image';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const ElevationScroll = (props) => {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    style: {
      background: trigger ? '#fff' : '#F5FF01',
    },
  });
};

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in a n iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const MissaAppBar = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <ElevationScroll {...props}>
        <AppBar elevation={0}>
          <Toolbar>
            <Image src="https://missabucket.s3.amazonaws.com/missa.svg" width={120} />
            <Box sx={{ flexGrow: 1 }} />
            <Grid container sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, pr: 4 }} spacing={2}>
              <Grid div>
                <IconButton
                  color="secondary"
                  aria-label="facebook"
                  component="label"
                  onClick={() => window.location.href = 'https://facebook.com/missa263'}
                >
                  <FacebookIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid div>
                <IconButton
                  color="secondary"
                  aria-label="twitter"
                  component="label"
                  onClick={() => window.location.href = 'https://twitter.com/missa263'}
                >
                  <TwitterIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid div>
                <IconButton
                  color="secondary"
                  aria-label="instagram"
                  component="label"
                  onClick={() => window.location.href = 'https://instagram.com/missa.263'}
                >
                  <InstagramIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid div>
                <IconButton
                  color="secondary"
                  aria-label="whatsapp"
                  component="label"
                  onClick={() => window.location.href = 'https://wa.me/263772367855?text='}
                >
                  <WhatsAppIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid div>
                <IconButton
                  color="secondary"
                  aria-label="email"
                  component="label"
                  onClick={() => window.location.href = 'mailto:missa@ezyy.cloud'}
                >
                  <EmailIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid div>
                <IconButton
                  color="secondary"
                  aria-label="call"
                  component="label"
                  onClick={() => window.location.href = 'tel:+263772367855'}
                >
                  <PhoneAndroidIcon color="secondary" />
                </IconButton>
              </Grid>

              <Grid
                div
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '600',
                    lineHeight: 1.7,
                    color: 'black',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  CAR RENTAL
                </Typography>
              </Grid>
              <Grid
                div
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '600',
                    lineHeight: 1.7,
                    color: 'black',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  COURIER SERVICES
                </Typography>
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              sx={{ borderRadius: '23px', fontFamily: 'Product Sans', color: '#000000', borderColor: '#000000' }}
              endIcon={<ChevronRightIcon />}
              onClick={() => navigate('/login')}
            >
              Sign in
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Container>
  );
};

export default MissaAppBar;
