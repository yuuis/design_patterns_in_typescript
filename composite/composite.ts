namespace CompositePattern {
    export interface Component {
        print(): void;
    }

    // Directoryクラスは、Componentクラスのリストを持つ。
    export class Directory implements Component {
        private list: Component[];
        private readonly name: String;
        constructor(s: String) {
            this.list = [];
            this.name = s;
        }

        // Directoryクラスのprintメソッドは、自身の配下を全て表示する
        public print = (): void => {
            console.log(`directory: ${this.name}`)
            this.list.forEach(item => item.print())
        }

        public add = (c: Component): number => this.list.push(c);
        public remove = (i: number): void => {
            if (this.list.length <= i) throw new Error("index out of bound!");
            this.list.splice(i, 1);
        }
    }

    // Leafクラス
    export class Leaf implements Component {
        private readonly name: String;
        constructor(s: String) {
            this.name = s;
        }

        // Leafクラスのprintは自身を表示して終了。
        public print = (): void => console.log(`leaf: ${this.name}`);
    }
}
