"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import losersLeagueLogo from "../../../public/loser-league-logo.png";

import localFont from "next/font/local";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const eurostile = localFont({ src: "../../../fonts/eurostile-bold-extended.otf" });

const FormTextField = styled(TextField) ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#252e69",
        },
        "&:hover fieldset": {
        borderColor: "#252e69",
        },
        "&.Mui-focused fieldset": {
        borderColor: "#252e69",
        },
      }
});

const FormLoginButton = styled(Button) ({
    backgroundColor: "#252e69",
    marginTop: 10,
});

export default function Login () {
    return (
        <div className={styles.loginTotalContainer}>
            <Image src={losersLeagueLogo} alt="header losers league logo" height={150} width={150} />
            <div className={styles.loginFormWhiteBoxContainer}>
                <h3 className={eurostile.className}>Login</h3>
                <h5>Seja bem vindo! faça seu login para continuar</h5>
                <FormTextField  id='email-login-text-field' label='Email' variant='outlined' size='small' fullWidth margin='normal' />
                <FormTextField  id='password-login-text-field' label='Senha' variant='outlined' size='small' fullWidth margin='normal' type='password' />
                <FormLoginButton variant="contained" fullWidth >Login</FormLoginButton>
                <div className={styles.loginSeparator}></div>
            </div>
        </div>
    );
}