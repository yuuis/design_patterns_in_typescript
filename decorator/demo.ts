/// <reference path="decorator.ts" />
namespace DecoratorPattern {
    export namespace Demo {

        export function show() : void {
            const decorator1: Decorator = new ConcreteDecorator(1, new ConcreteComponent("Comp1"));

            decorator1.operation();
        }
    }
}

DecoratorPattern.Demo.show();
// !!! decorated !!!
// Comp1
// --- decorated by decorator-1 ---
