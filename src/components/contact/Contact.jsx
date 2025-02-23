import { useContext } from "react";

import { Box, Button, TextField, Typography, useTheme } from "@mui/material";

import theme from "../../theme/theme";
import { RefContext } from "../../context/RefContext";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const { palette } = useTheme(theme);
  const { Contact } = useContext(RefContext);

  //   document.addEventListener("DOMContentLoaded", function () {
  //     emailjs.init({ publicKey: "V7vK0o8X7SKZHV83X" });

  //     document
  //       .getElementById("contact-form")
  //       .addEventListener("submit", function (event) {
  //         event.preventDefault();

  //         emailjs.sendForm("service_9x6bxkk", "template_uahx7l9", this).then(
  //           () => {
  //             console.log("SUCCESS!");
  //             alert("Your message has been sent successfully!"); // Add user feedback
  //           },
  //           (error) => {
  //             console.error("FAILED...", error);
  //             alert("Oops! Something went wrong. Please try again."); // Better error handling
  //           }
  //         );
  //       });
  //   });

  const sendEmail = () => {
    emailjs.init({ publicKey: "V7vK0o8X7SKZHV83X" });
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_9x6bxkk", "template_uahx7l9", this).then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      });
  };

  return (
    <Box id="Contact" ref={Contact} className="section" pb={"5rem"}>
      <Typography
        variant="h2"
        sx={{
          position: "relative",
          top: "8rem",
          backgroundColor: "white",
          width: "fit-content",
          height: "fit-content",
          fontSize: "2rem",
          px: "0.5rem",
          mx: "auto",
          zIndex: 1,
        }}
      >
        Contact
      </Typography>
      <Box
        component={"form"}
        id="contact-form"
        sx={{
          border: "1px solid",
          borderRadius: "1rem",
          borderColor: palette.common.lightGray,
          width: "60%",
          padding: "2rem",
          margin: "7rem auto",
        }}
      >
        <Box sx={{ display: "flex", gap: "6%", my: "2rem" }}>
          <TextField label="First Name" sx={{ width: "47%" }}></TextField>
          <TextField label="Last Name" sx={{ width: "47%" }}></TextField>
        </Box>
        <Box sx={{ my: "2rem" }}>
          <TextField label="E-mail Address" fullWidth></TextField>
        </Box>
        <Box sx={{ my: "2rem" }}>
          <TextField label="Title" fullWidth></TextField>
        </Box>
        <Box sx={{ my: "2rem" }}>
          <TextField
            label="Whatever You Want To Say..."
            fullWidth
            multiline
            rows={5}
          ></TextField>
        </Box>
        <Button
          type="submit"
          variant="outlined"
          sx={{ borderColor: palette.primary.main, padding: "0.5rem 2rem" }}
          onClick={sendEmail}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
