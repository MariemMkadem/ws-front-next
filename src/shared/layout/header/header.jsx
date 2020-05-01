import NProgress from 'nprogress';
import Router from 'next/router';
import HeaderWrapper from './headerWrapper';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const header = () => <HeaderWrapper>header</HeaderWrapper>;

export default header;
