import models from '~/models/index';
import collections from '~/collections/index';

class Battleship {
  constructor() {
    this._initiateModels();
    this._initiateCollections();
    this._initiateConfigs();
  }

  _initiateModels() {
    this.Models = models;
  }

  _initiateCollections() {
    this.Collections = collections;
  }

  _initiateConfigs() {
    
  }
}

export default new Battleship();
