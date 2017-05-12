export class Armor {
    private _value: number = 10;

    set value(value: number) {
        this._value = value;
    }

    get value() {
        return this._value;
    }
}
