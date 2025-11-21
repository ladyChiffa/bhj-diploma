/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sideButton = document.querySelector(".sidebar-toggle");
    sideButton.onclick = () => {
        document.body.classList.toggle("sidebar-open");
        document.body.classList.toggle("sidebar-collapse");
    };
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const login = document.querySelector(".menu-item_login");
    login.onclick = () => {
        const loginModal = App.getModal("login");
        loginModal.open();
        return false;
    }
    
    const register = document.querySelector(".menu-item_register");
    register.onclick = () => {
        const registerModal = App.getModal("register");
        registerModal.open();
        return false;
    }

    const logout = document.querySelector(".menu-item_logout");
    logout.onclick = () => {
        User.logout((err, response) => {
            if(response.success) {
                 App.setState('init');
            }
        });
        return false;
    }
  }
}
