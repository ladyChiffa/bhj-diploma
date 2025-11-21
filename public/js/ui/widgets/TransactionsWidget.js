/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if(!element) {
        throw new Error("несуществующий виджет");
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const income = document.querySelector(".create-income-button");
    income.onclick = () => {
        const modal = App.getModal("newIncome");
        modal.open();
        return false;
    }
    const expense = document.querySelector(".create-expense-button");
    expense.onclick = () => {
        const modal = App.getModal("newExpense");
        modal.open();
        return false;
    }
  }
}
