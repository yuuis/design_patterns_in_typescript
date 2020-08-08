namespace FactoryMethodPattern {

    export type Product = {
        readonly owner: string;
        use(): string;
    };

    export class Car implements Product {
        readonly owner: string;
        constructor(owner: string) {
            this.owner = owner;
        }

        use = (): string => `this is a car.`;
    }
    export class Bicycle implements Product {
        readonly owner: string;
        constructor(owner: string) {
            this.owner = owner;
        }
        use = (): string => `this is a bicycle.`;
    }

    // ファクトリのベースクラス。
    // Factoryでどんなことを行うべきかメソッドとして定義する。
    // 本来はメソッドで何をするべきか定義しておくけど、TSではできなかった。
    export interface ProductFactory {
        create(owner: string): Product;
        // createは、本当はこう書きたい。
        // create(owner: string): Product {
        //     const product = createProduct(owner);
        //     registerProduct(product);
        //     return product;
        // };
        createProduct(owner: string): Product; // 本当はprotectedにしたい
        registerProduct(product: Product): void; // 本当はprotectedにしたい
    }

    // クラスごとのFactory。
    export class CarFactoryImpl implements ProductFactory {
        create = (owner: string): Product => {
            const car = this.createProduct(owner);
            this.registerProduct(car);
            return car;
        }
        createProduct = (owner: string): Product => new Car(owner);
        registerProduct = (product: FactoryMethodPattern.Product) => console.log(`registered: ${JSON.stringify(product)}`);
    }

    export class BicycleFactoryImpl implements ProductFactory {
        create = (owner: string): Product => {
            const car = this.createProduct(owner);
            this.registerProduct(car);
            return car;
        }
        createProduct = (owner: string): Product => new Bicycle(owner);
        registerProduct = (product: FactoryMethodPattern.Product) => console.log(`registered: ${JSON.stringify(product)}`);
    }
}
