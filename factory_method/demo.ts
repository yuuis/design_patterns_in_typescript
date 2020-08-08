/// <reference path="factoryMethod.ts" />

namespace FactoryMethodPattern {
    export namespace Demo {
        export function show() : void {
            // FactoryMethodを呼び出す側が知っている。
            const car = new CarFactoryImpl().create("alex");
            const bicycle = new BicycleFactoryImpl().create("bob");

            // 結果はオブジェクトごとに異なる
            console.log(car.use());
            console.log(bicycle.use());
        }
    }
}

FactoryMethodPattern.Demo.show();
