/// <reference path="composite.ts" />
namespace CompositePattern {
    export namespace Demo {
        export function show() : void {
            const leaf1 = new Leaf("Leaf1"),
                leaf2 = new Leaf("Leaf2"),
                leaf3 = new Leaf("Leaf3"),

                directory1 = new Directory("Dir1"),
                directory2 = new Directory("Dir2");

            directory1.add(leaf1);
            directory1.add(leaf2);
            directory1.add(leaf3);

            directory1.remove(2);
            directory1.print();
            // dir1
            // leaf1
            // leaf2

            directory2.add(directory1);
            directory2.add(leaf3);
            directory2.print();
            // dir2
            // dir1
            // leaf1
            // leaf2
            // leaf3
        }
    }
}

CompositePattern.Demo.show();
