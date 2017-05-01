import BaseController from '~/controllers/BaseController';
import LoginController from '~/controllers/LoginController';

class InitializeController extends BaseController {
  async perform() {
    await new LoginController().perform();
  }
}

export default new InitializeController();
