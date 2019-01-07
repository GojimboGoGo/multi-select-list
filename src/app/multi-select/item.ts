export class Item {

    private _text: string;
    private _value: string;
    private _selected: boolean;
    private _image: string;

    constructor(text: string, value: string, selected?: boolean, image?: string) {
        this.setText(text);
        this.setValue(value);
        this.setSelected(selected ? selected : false);
        this.setImage(image);
    }

    getText(): string {
        return this._text;
    }

    getValue(): string {
        return this._value;
    }

    getSelected(): boolean {
        return this._selected;
    }

    getImage(): string {
        return this._image;
    }

    setText(t: string) {
        this._text = t;
    }

    setValue(v: string) {
        this._value = v;
    }

    setSelected(s: boolean) {
        this._selected = s;
    }

    setImage(i: string) {
        this._image = i;
    }
}