import { Actions } from 'react-native-mobx';
import autobind from 'autobind-decorator';
import BaseController from './BaseController';
import Battleship from '~/config/initialize';

export default class LoginController extends BaseController {
  initialAction() {
    Actions.loginComponent({
      loginClick: this.loginClick,
    });
  }

  @autobind
  loginClick(val, e) {
    console.log(val, e);
  }
}
