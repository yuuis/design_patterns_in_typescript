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
    // Factoryでどんなことを行うべきかメソッドとして定義する。(= Template Method Pattern)
    export class ProductFactoryBase {
        create(owner: string): Product {
            const product = this.createProduct(owner);
            this.registerProduct(product);
            return product;
        };

        // 以下のメソッドは、実装しないと使えないようにする。
        createProduct = (owner: string): Product => {
            throw new Error('Not Implemented.');
        };
        registerProduct = (product: Product): void => {
            throw new Error('Not Implemented.');
        };
    }

    // クラスごとのFactory。
    export class CarFactoryImpl extends ProductFactoryBase {
        // createメソッドは親クラスのものをそのまま使うのでoverwriteしない。
        createProduct = (owner: string): Product => new Car(owner);
        registerProduct = (product: FactoryMethodPattern.Product) => console.log(`registered: ${JSON.stringify(product)}`);
    }

    export class BicycleFactoryImpl extends ProductFactoryBase {
        createProduct = (owner: string): Product => new Bicycle(owner);
        registerProduct = (product: FactoryMethodPattern.Product) => console.log(`registered: ${JSON.stringify(product)}`);
    }
}
