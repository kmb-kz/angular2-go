import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from 'ng2-bootstrap/components/buttons';
import { CollectableService } from '../shared/collectable.sevice';
import { Collectable } from '../shared/collectable.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  

})
export class MarketComponent implements OnInit {
  collectables:Collectable[] = [];

  onAddToCollection(item:Collectable){
    this.collectableService.addToCollection(item)
  }
  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
     this.collectables=this.collectableService.getCollectables();
  }

}
