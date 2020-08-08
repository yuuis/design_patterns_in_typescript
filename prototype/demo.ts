/// <reference path="prototype.ts" />

namespace PrototypePattern {
    export namespace Demo {
        export function show() : void {
            const builder : PrototypePattern.Builder = new PrototypePattern.Builder();
            let i = 0;
            for (i = 1; i <= 3; i += 1) {
                console.log(builder.createOne("c" + i).toString());
            }

        }
    }

    // ここから下だけ本題
    type Car = {
        readonly noOfWheels: number,
        start: () => string;
        stop: () => string;
    }

    const car: Car = {
        noOfWheels: 4,
        start: () => 'started',
        stop: () => 'stopped',
    };

    // carを基に新しいインスタンスを作成する。
    // Object.create(proto[, propertiesObject])
    const myCar = Object.create(car, { owner: { value: 'John' } });
    console.log(myCar.__proto__ === car); // true
    console.log(myCar); // __proto__にcarの情報が入っている。
}
