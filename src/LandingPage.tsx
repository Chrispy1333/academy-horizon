import React, { useEffect } from "react";
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    Box,
    ThemeProvider,
    createTheme,
} from "@mui/material";

// Create a custom theme with orange as the primary color
const theme = createTheme({
    palette: {
        primary: {
            main: '#FFA500',
        },
        secondary: {
            main: '#272c47',
        },
    },
});

// CSS for the animated gradient background
const gradientStyles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(-45deg, #FFA500, #FF8C00, #FF4500, #FF6347);
    // animation: gradient 10s ease infinite;
  }
`;

const LandingPage: React.FC = () => {
    useEffect(() => {
        // Add the gradient styles to the document
        const styleElement = document.createElement("style");
        styleElement.innerHTML = gradientStyles;
        document.head.appendChild(styleElement);

        // Clean up
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ color: "white", fontWeight: "bold" }}
                        >
                            Academy Horizon
                        </Typography>
                        <Box>
                            <Button color="inherit" sx={{ color: "white" }}>
                                About
                            </Button>
                            <Button color="inherit" sx={{ color: "white" }}>
                                Tutors
                            </Button>
                            <Button color="inherit" sx={{ color: "white" }}>
                                Contact
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="main" sx={{ flexGrow: 1, display: "flex" }}>
                    <Box
                        sx={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "0 48px",
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{ color: "white" }}
                        >
                            Expand Your Knowledge Horizon
                        </Typography>
                        <Typography
                            variant="h5"
                            paragraph
                            sx={{ color: "white" }}
                        >
                            Connect with expert tutors online and embark on a
                            personalized learning journey tailored to your
                            goals.
                        </Typography>
                        <Box>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ marginRight: 2 }}
                            >
                                Find a Tutor
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ color: "white", borderColor: "white" }}
                            >
                                Become a Tutor
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "50%",
                            height: "100%",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "calc(100% - 36px)",
                                position: "relative",
                            }}
                        >
                            <iframe
                                src="https://my.spline.design/guitarattempt-a8802a2194df5e88876c5023e605b76f/"
                                frameBorder="0"
                                width="100%"
                                height="100%"
                                title="Spline Guitar"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default LandingPage;
