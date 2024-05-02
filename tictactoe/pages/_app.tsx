import App from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>#Jogo da Velha#</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;