function addZero(number) {
    return `${parseInt(number/10)}${parseInt(number%10)}`;
}

class Timer {

    constructor() {
        this.sec = 0;
        this.min = 0;
        this.hour = 0;
        this.stoped = false;
    }

    reset() {
        this.sec = 0;
        this.min = 0;
        this.hour = 0;
    }

    show() {
        return `<h2>Time Consumed:</h2>
            <br/>
            <h3 id="game-time">${addZero(this.hour)}:${addZero(this.min)}:${addZero(this.sec)}</h3>`;
    }

    stop() {
        this.stoped = true;
    }

    start() {
        this.stoped = false;
    }

    update() {
        if (!this.stoped) {
            this.sec++;
            if (this.sec > 60) {
                this.min++;
                this.sec = 0;
            }
            if (this.min > 60) {
                this.hour++;
                this.min = 0;
            }
        }
    }
}