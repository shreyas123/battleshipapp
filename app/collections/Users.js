import { Collection } from 'mobx-rest';
import Battleship from '~/config/initialize';

export default class Users extends Collection {
  model() {
    return Battleship.Models.User;
  }
}
