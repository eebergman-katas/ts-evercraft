export class Health {
    private _hitpoints: number = 5;

    get hitpoints() {
        return this._hitpoints;
    }

    set hitpoints(hitpoints: number) {
        this._hitpoints = hitpoints;
    }
}
