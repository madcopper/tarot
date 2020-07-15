import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

import wrapper from "../store/configureStore";
import "../styles/index.scss";

const App = ({Component}) => {
    return (
        <>
            <Head>
              <title>타로하는 사자처럼</title>
                <meta charSet="UTF-8"/>
            </Head>
            <Component/>
        </>
    )
}

App.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);