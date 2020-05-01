import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Reset from 'lib/resetCss';
import Header from './header';
import Meta from './meta';
import Footer from './footer';
import LayoutWrapper from './layoutWrapper';

const theme = {
  maxWidth: '1000px',
};

class layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <Reset />
          <Meta />
          <Header />
          {this.props.children}
          <Footer />
        </LayoutWrapper>
      </ThemeProvider>
    );
  }
}

export default layout;
