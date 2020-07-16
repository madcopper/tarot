import AppLayout from "../components/AppLayout";
import {useSelector} from 'react-redux';

import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';

const Home = () => {

    const {me} = useSelector((state) => state.user)

    return (
        <AppLayout>
            {me ? <UserProfile/> : <LoginForm />}
            <div>Hello, Next!</div>
                <div>너는 지금 리엑트를 배우고 싶다.</div>
        </AppLayout>
    )
}

export default Home;