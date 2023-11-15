function LogMethod(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

export class SomeThing {
    /**
     * This will do something
     * @returns {string} Something different string
     */
    @LogMethod
    public doSomething(): string {
        return `Hello World@${new Date().toISOString()}`;
    }
}

export default {
    SomeThing,
}