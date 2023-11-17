export class SomeThing {
    /**
     * This will do something
     * @returns Something different string
     */
    public doSomething (): string {
        return `Hello World@${new Date().toISOString()}`
    }
}

export default {
    SomeThing
}
