//Template class for lazy-loaded data
export class LoadableData<DataType> {
    //Initialize a data type by its ID
    constructor(id: number) {
        this.id = id
    }

    //The ID number of the document in the database.
    readonly id: number

    //Whether the document has been loaded or not.
    private loaded = false

    //The document's data is cached here to prevent duplicate database queries.
    private _data?: DataType

    //A getter to load the data of the document.
    //If the data has already been loaded, returns value from the cache.
    get data() {
        if (!this.loaded) {
            this.load()
        }
        return this._data!
    }

    //A custom loader to load the data from the database.
    private loader?: () => DataType

    //Calls the custom loader, sets loaded property to true.
    private load() {
        try {
            this._data = this.loader!()
            this.loaded = true
        } catch {
            this._data = undefined
            console.error(`Document ID ${this.id} did not load any data.`)
        }
        
    }

}
