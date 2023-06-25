class KeyValuePairs<T, U>{
    private key: T;
    private value: U;

    public setKeyValue(key: T, value: U): void {
       
        this.key = key;
        this.value = value;

    }

    public display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`)
    }
}
let kvp = new KeyValuePairs<number, string>();
kvp.setKeyValue(4, "Steve");
kvp.display();