import Document, { Html, Head, Main, NextScript } from 'next/document'
// renders document
export default class CustomDocument extends Document {

    render(){

        return (

            <Html>

                <Head>
                    <meta property='global property 1337'/>
                </Head>

                <body>
                    <Main/>
                </body>

                <NextScript/>

            </Html>

        )
    }

}