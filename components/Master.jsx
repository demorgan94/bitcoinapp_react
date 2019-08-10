import Head from 'next/head';
import Nav from './Nav';

const Master = (props) => {
   return (
      <div>
         <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" />
         </Head>

         <Nav />

         <div className="container mt-4">
            {props.children}
         </div>
      </div>
   );
};

export default Master;