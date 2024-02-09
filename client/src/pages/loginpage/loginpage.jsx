import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import LoginPage from '../login';

const Login = () => {
    return (<>
    <Theme>
        <LoginPage />
    </Theme>
            </>
    );
};

export default Login;