/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.login(data, (err, response) => {
        const modal = App.getModal("login");
        if (response.success) {
            modal.clearError()
            App.setState('user-logged');
            modal.close();
        }
        else {
            modal.setError(response.error)
            this.element.reset();
        }
    });
  }
}

