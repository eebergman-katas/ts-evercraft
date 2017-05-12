import { Alignment } from './alignment/alignment.enum';

export class Character {
    private _name: string;
    private _alignment: string;

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get alignment() {
        return this._alignment;
    }

    set alignment(alignmentKey: number | string) {
        this._alignment = this.lookUpAlignment(alignmentKey);
    }

    private lookUpAlignment(alignmentKey: number | string): string {
        if (typeof alignmentKey === 'number') {
            return Alignment[alignmentKey];
        }
        return alignmentKey;
    }
}
