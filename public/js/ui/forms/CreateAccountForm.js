/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    Account.create(data, (err, response) => {
        const modal = App.getModal("createAccount");
        if (response.success) {
            modal.clearError()
            App.update();
            modal.close();
        }
        else {
            modal.setError(response.error)
            this.element.reset();
        }
    });
  }
}