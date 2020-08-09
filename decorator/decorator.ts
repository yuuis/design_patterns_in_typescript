namespace DecoratorPattern {

    // 装飾される対象の抽象クラス。
    export interface Component {
        operation(): void;
    }

    // Componentの具象クラス。修飾される？
    export class ConcreteComponent implements Component {
        private readonly name: String;

        constructor(s: String) {
            this.name = s;
        }

        public operation = (): void => console.log(`${this.name}`);
    }

    // Componentの具象クラス。Componentクラスを修飾する抽象クラス。
    // 装飾対象のクラスをフィールドに持っていることが特徴。
    export class Decorator implements Component {
        private component: Component;
        private readonly id: number;

        constructor(id: number, component: Component) {
            this.id = id;
            this.component = component;
        }

        public get Id(): Number {
            return this.id;
        }

        public operation(): void {
            console.log("!!! decorated !!!");
            this.component.operation();
        }
    }

    // Decoratorの具象クラス。実際に装飾を行う。
    export class ConcreteDecorator extends Decorator {
        constructor(id: number, component: Component) {
            super(id, component);
        }

        public operation = (): void => {
            super.operation();
            console.log(`--- decorated by decorator-${this.Id} ---`)
        }
    }
}
