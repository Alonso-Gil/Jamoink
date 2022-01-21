import React from 'react';
import Layout from '../components/layouts/Layout';

const MyApp = ({Component, pageProps}) => {
    return ( 
        <Layout>
            <Component {...pageProps} />
        </Layout>
     );
}
 
export default MyApp;