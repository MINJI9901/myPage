import { useContext, useState, useEffect } from "react";
// MUI
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
// THEME
import theme from "../../theme/theme";
// CONTEXTS
import { RefContext } from "../../context/RefContext";
// EMAILJS
import emailjs from "@emailjs/browser";
// TOAST
import { toast } from "react-toastify";
// UUID
import { v4 as uuid } from "uuid";

export default function Contact() {
  const { palette } = useTheme(theme);
  const { Contact } = useContext(RefContext);

  let errorObject = {};
  const emailRegex = /^.+@.+\..+$/;

  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [inputError, setInputError] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const checkInput = () => {
    errorObject["firstName"] = formData.firstName.length
      ? false
      : "First name is required";
    errorObject["lastName"] = formData.lastName.length
      ? false
      : "Last name is required";
    errorObject["email"] =
      formData.email.length && emailRegex.test(formData.email)
        ? false
        : "Please, type valid email";
    errorObject["message"] =
      formData.message.length > 10
        ? false
        : "Please, type at least 10 charactors";

    console.log("error object: ", errorObject);

    setInputError(() => ({ ...errorObject }));
  };

  const ToastMsg = ({ title, content }) => {
    return (
      <Box
        textAlign="center"
        m="0.5rem"
        backgroundColor={palette.grey[50]}
        // border={`1px soild ${palette.primary.main}`}
        // borderRadius={"10px"}
      >
        <Typography fontWeight={700} color={palette.primary.dark}>
          {title}
        </Typography>
        <Typography m={"10px"}>{content}</Typography>
      </Box>
    );
  };

  const sendEmail = () => {
    checkInput();

    console.log(
      Object.values(errorObject).filter((value) => value === false).length === 4
    );
    if (
      Object.values(errorObject).filter((value) => value === false).length === 4
    ) {
      console.log("sending email...");

      emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          // these IDs from the previous steps
          emailjs
            .sendForm(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              this
            )
            .then(
              (res) => {
                console.log("SUCCESS!: ", res);

                // toast("hello");
                const idForToast = uuid();

                toast(
                  <ToastMsg
                    title={`🖐️ Hello ${formData.firstName} !`}
                    content={"Successfully Delivered Your Message To MINJI!"}
                  />,
                  {
                    toastId: idForToast,
                    hideProgressBar: true,
                  }
                );

                setFormData(initialData);
              },
              (error) => {
                console.log("FAILED...", error);

                setFormData(initialData);
              }
            );
        });

      setInputError({});
    }
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
          width: { xs: "100%", sm: "80%", lg: "70%" },
          padding: "2rem",
          margin: "7rem auto",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}
      >
        <Box sx={{ display: "flex", gap: "6%", my: "1rem" }}>
          <TextField
            error={inputError.firstName && !formData.firstName ? true : false}
            helperText={
              inputError.firstName && !formData.firstName
                ? inputError.firstName
                : false
            }
            label="First Name"
            size="small"
            sx={{ width: "47%" }}
            name="firstName"
            value={formData.firstName}
            onChange={handleInput}
          ></TextField>
          <TextField
            error={inputError.lastName && !formData.lastName ? true : false}
            helperText={
              inputError.lastName && !formData.lastName
                ? inputError.lastName
                : false
            }
            label="Last Name"
            size="small"
            sx={{ width: "47%" }}
            name="lastName"
            value={formData.lastName}
            onChange={handleInput}
          ></TextField>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <TextField
            fullWidth
            error={
              inputError.email && !emailRegex.test(formData.email)
                ? true
                : false
            }
            helperText={
              inputError.email && !emailRegex.test(formData.email)
                ? inputError.email
                : false
            }
            label="E-mail Address"
            size="small"
            name="email"
            value={formData.email}
            onChange={handleInput}
          ></TextField>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <TextField
            fullWidth
            label="Title"
            size="small"
            name="title"
            value={formData.title}
            onChange={handleInput}
          ></TextField>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <TextField
            fullWidth
            error={
              inputError.message && !(formData.message.length > 10)
                ? true
                : false
            }
            helperText={
              inputError.message && !(formData.message.length > 10)
                ? inputError.message
                : false
            }
            label="Whatever You Want To Say..."
            size="small"
            multiline
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleInput}
          ></TextField>
        </Box>
        <Button
          type="submit"
          variant="outlined"
          sx={{ borderColor: palette.primary.main, padding: "0.5rem 2rem" }}
          // onClick={sendEmail}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
