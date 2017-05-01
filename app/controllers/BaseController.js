export default class BaseController {
  promiseResolve = null;
  promiseReject = null;
  promise = null;

  initialAction() {
    throw new Error('Please implement the initialAction controllerAction()');
  }

  perform() {
    this.promise = new Promise((resolve, reject) => {
      this.promiseResolve = resolve;
      this.promiseReject = reject;
    });
    this.initialAction();
    return this.promise;
  }
}
