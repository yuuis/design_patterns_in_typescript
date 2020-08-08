namespace SingletonPattern {
    export class Singleton {
        // A variable which stores the singleton object. Initially,
        // the variable acts like a placeholder
        private static singleton: Singleton;

        // private constructor so that no instance is created
        private constructor() {}

        // This is how we create a singleton object
        public static getInstance(): Singleton {
            // まだ作られていなかったら、新しく作る。
            if (!Singleton.singleton) Singleton.singleton = new Singleton();

            return Singleton.singleton;
        }
    }
}
