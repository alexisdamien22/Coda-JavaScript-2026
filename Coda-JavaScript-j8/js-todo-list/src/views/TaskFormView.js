export class TaskFormView {
    #formElement;
    #inputElement;
    #submitCallback;

    constructor(formSelector, inputSelector, containerSelector) {
        this.#formElement = document.querySelector(formSelector);
        this.#inputElement = document.querySelector(inputSelector);

        if (!this.#formElement || !this.#inputElement) {
            throw new Error("Form or input element not found");
        }
        this.#setupEventListeners();
    }
    #setupEventListeners() {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = this.getTitle();

            if (typeof this.#submitCallback === "function") {
                this.#submitCallback(title);
                this.clear();
            }
        });
    }

    onSubmit(callback) {
        this.#submitCallback = callback;
    }

    getTitle() {
        return this.#inputElement.value.trim();
    }

    clear() {
        this.#inputElement.value = "";
        this.#inputElement.focus();
    }

    disable() {
        this.#inputElement.setAttribute("disabled", "disabled");
    }

    enable() {
        this.#inputElement.removeAttribute("disabled");
    }

    showError(message) {
        const errorElement = document.createElement("p");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        this.#formElement.appendChild(errorElement);

        setTimeout(() => {
            // ? On supprime l'élément d'erreur après 5 secondes
            errorElement.remove();
        }, 5000);
    }
}