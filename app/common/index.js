import footerModule from './footer';
import headerModule from './header';
import alertMoudule from './components/alert';
import tipModule from './directives/tips';
import echartsModule from './directives/echarts';
export default angular.module('app.common', [footerModule,headerModule,alertMoudule,tipModule,echartsModule]).name;