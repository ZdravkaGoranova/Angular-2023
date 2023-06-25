class Box<T> {
    // private _boxes = [];
    private _boxes: T[];

    constructor() {
        this._boxes = [];
    }


    public add(element: T): void {
        this._boxes.push(element)
    }

    public remove(): T {
        if (this.count === 0) {
          throw new Error('Box is empty');
        }
        return this._boxes.pop();
      }

      public get count(): number {
        return this._boxes.length;
      }

}
// Примери на използване:

let box = new Box<number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count); // Изход: 3

let box2 = new Box<string>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count); // Изход: 2

box2.remove();
console.log(box2.count); // Изход: 1