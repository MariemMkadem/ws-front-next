import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from 'lib/with-apollo-client';
import Layout from 'shared/layout';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
