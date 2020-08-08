/// <reference path="adapter.ts" />
namespace AdapterPattern {
    export namespace Demo {

        export function show() : void {
            const adapter: Adapter = new Adapter();
            console.log(adapter.call());
        }
    }
}
