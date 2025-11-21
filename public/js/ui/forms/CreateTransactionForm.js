/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    Account.list(null, (err, response) => {
        if(response.success) {
            const select = this.element.querySelector(".accounts-select");
            select.innerHTML = "";
            
            for(let option in response.data) {
                let inserthtml = "<option value='" + response.data[option].id + "'>" + response.data[option].name + "</option>";
                select.insertAdjacentHTML("beforeEnd", inserthtml);
            }
        }
        
    });
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
        const modalName = this.element.id == "new-income-form" ? "newIncome" : "newExpense";
        const modal = App.getModal(modalName);
        
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
