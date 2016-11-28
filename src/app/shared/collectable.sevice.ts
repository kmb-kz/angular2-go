import {Collectable} from './collectable.model';

export class CollectableService{
    private collectables: Collectable[] =[
        {description:"123",type:"book"},
        {description:"456",type:"garbage"},
        {description:"789",type:"photo"},
        {description:"147",type:"books"},
    ];
    private collection: Collectable[] = [];

    getCollectables(){
        return this.collectables;
    }
    
    getCollection(){
        return this.collection;
    }

    addToCollection(item:Collectable){
        if(this.collection.indexOf(item) !== -1){
            return;
        }
        this.collection.push(item);
    }
    removeFromCollection(item:Collectable){
        this.collection.splice(this.collection.indexOf(item),1);
    }
}