import React from "react";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import LoginPage from '../login/login';
import "../loginpage/style.css";

const Login = () => {
    return (<>
    <Theme>
        <Header />
        <LoginPage />
        <Footer />
    </Theme>
            </>
    );
};

export default Login;