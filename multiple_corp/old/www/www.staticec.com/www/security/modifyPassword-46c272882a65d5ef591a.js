webpackJsonp([2,4],{JNr5:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function s(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var u=t("uuhB"),l=o(u),i=t("37+n"),d=o(i),c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),f=t("U7vG"),y=o(f),m=t("LvmQ"),w=d.default.Item,b={labelCol:{span:5},wrapperCol:{span:17}},v=function(e){function r(){var e,t,o,s;a(this,r);for(var u=arguments.length,l=Array(u),i=0;i<u;i++)l[i]=arguments[i];return t=o=n(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),o.validatePassword=function(e,r){var t=o.props,a=t.updateErrorText,n=t.modifyForm;switch(r){case 1:e?(o.props.checkOldPassword(e),a("")):a("请输入旧二次密码!");break;case 2:a(e?(0,m.isManagePasswordValid)(e)?"":"新二次密码格式错误！":"请输入新二次密码!");break;case 3:e?e!==n.password?a("两次输入的密码不一致!"):(0,m.isManagePasswordValid)(n.password)&&a(""):a("请重复输入二次密码!")}},s=t,n(o,s)}return s(r,e),p(r,[{key:"render",value:function(){var e=this,r=this.props.form.getFieldDecorator,t=r("oldPassword")(y.default.createElement(l.default,{autoComplete:"new-password",type:"password",onBlur:function(r){return e.validatePassword(r.target.value,1)}})),o=r("password")(y.default.createElement(l.default,{autoComplete:"new-password",type:"password",onBlur:function(r){return e.validatePassword(r.target.value,2)},placeholder:"6位数字，建议不要与EC登录密码重复"})),a=r("repeatPassword")(y.default.createElement(l.default,{autoComplete:"new-password",type:"password",onBlur:function(r){return e.validatePassword(r.target.value,3)}}));return y.default.createElement("div",{className:"manage-password-modify"},y.default.createElement(d.default,null,y.default.createElement(w,c({label:"旧二次密码"},b),t),y.default.createElement(w,c({label:"新二次密码"},b),o),y.default.createElement(w,c({label:"确认新密码"},b),a)))}}]),r}(y.default.Component);v.propTypes={form:f.PropTypes.object.isRequired,updateModifyForm:f.PropTypes.func.isRequired,updateErrorText:f.PropTypes.func.isRequired,modifyForm:f.PropTypes.object.isRequired,errorText:f.PropTypes.string.isRequired,checkOldPassword:f.PropTypes.func.isRequired};var P=function(e){return(0,m.transformPropsFitForm)(e.modifyForm)},h=function(e,r){return e.updateModifyForm({fields:r})};r.default=d.default.create({mapPropsToFields:P,onFieldsChange:h})(v)},"FiA+":function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var a=t("4n+p"),n=t("c9Fv"),s=t("LOWW"),u=t("JNr5"),l=o(u),i=function(e){var r=e.managePassword;return{errorText:r.errorText,modifyForm:r.modify}},d=function(e){return{updateModifyForm:(0,n.bindActionCreators)(s.updateModifyForm,e),updateErrorText:(0,n.bindActionCreators)(s.updateErrorText,e),checkOldPassword:(0,n.bindActionCreators)(s.checkOldPassword,e)}};r.default=(0,a.connect)(i,d)(l.default)}});