/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (err, response) => {
        const modal = App.getModal("register");
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
