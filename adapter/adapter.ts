namespace AdapterPattern {

    // 使われるやつ
    export class Adaptee {
        public method = (): string => "`method` of Adaptee is being called";
    }

    // Targetの具象クラス
    export class Adapter implements Target {
        public call = (): string => {
            console.log("Adapter's `call` method is being called");

            // Adapteeクラスを委譲して使う
            const adaptee: Adaptee = new Adaptee();
            return adaptee.method();
        }
    }

    // 抽象クラス
    export interface Target {
        call(): string;
    }
}
