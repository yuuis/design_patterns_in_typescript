namespace FacadePattern {

    export class Part1 {
        public method1(): void {
            console.log("Part1#method1!");
        }
    }

    export class Part2 {
        public method2(): void {
            console.log("Part2#method2!");
        }
    }

    export class Part3 {
        public method3(): void {
            console.log("Part3#method3!");
        }
    }

    // 腐敗防止層。
    // 複雑なクラスに対して、それらをカプセル化して使いやすいインタフェースを提供する。
    export class Facade {
        // カプセル化したいクラスを委譲して実装することが多い。
        private part1: Part1 = new Part1();
        private part2: Part2 = new Part2();
        private part3: Part3 = new Part3();

        public operation1(): void {
            console.log("operation1 start");
            this.part1.method1();
            this.part2.method2();
            console.log("operation1 end");
        }

        public operation2(): void {
            console.log("operation2 start");
            this.part1.method1();
            this.part3.method3();
            console.log("operation2 end");
        }
    }
}
