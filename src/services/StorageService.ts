class StorageService{
    private static storage = localStorage;

    private constructor() {}

    public static getItem(key: string){
        return this.storage.getItem(key)
    }

    public static setItem(key: string, value: string){
        this.storage.setItem(key, value);
    }

    public static removeItem(key: string){
        this.storage.removeItem(key);
    }

    public static clear(){
        this.storage.clear();
    }
}

export default StorageService;