export class EventEmitter {
    #events;
    constructor() {
        this.#events = new Map();
    }
    // S'abonner à un événement
    on(eventName, callback) {
        if (!this.#events.has(eventName)) {
            this.#events.set(eventName, []);
        }
        this.#events.get(eventName).push(callback);
    }
    // Émettre un événement
    emit(eventName, data) {
        if (!this.#events.has(eventName)) return;

        this.#events.get(eventName).forEach((callback) => {
            try {
                callback(data);
            } catch (error) {
                console.error(`Erreur dans le callback de ${eventName}:`, error);
            }
        });
    }
    // Se désabonner d'un événement
    off(eventName, callback) {
        if (!this.#events.has(eventName)) return;
        this.#events.set(
            eventName,
            this.#events.get(eventName).filter((cb) => cb !== callback),
        );
    }

    once(eventName, callback) {
        const onceCallback = (data) => {
            callback(data);
            this.off(eventName, onceCallback);
        };
        this.on(eventName, onceCallback);
    }

    removeAllListeners(eventName) {
        if (eventName) {
            this.#events.delete(eventName);
        } else {
            this.#events.clear();
        }
    }

    listenerCount(eventName) {
        return this.#events.has(eventName) ? this.#events.get(eventName).length : 0;
    }
}