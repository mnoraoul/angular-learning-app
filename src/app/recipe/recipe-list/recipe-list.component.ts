import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatTable /*, MatTableDataSource*/ } from "@angular/material/table";
import { Observable } from "rxjs";
import { Recipe } from "../recipe.model";
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit{
    displayedColumns: string[] = ['name', 'description', 'image'];
 
  
    recipes : Recipe[] = [
        new Recipe('Test Recipe', 'This is a test recipe', 'https://images.squarespace-cdn.com/content/v1/5ade3e0e89c172449f88ac65/1614124509238-DZRBXSDATGWCUGTMHQM3/ke17ZwdGBToddI8pDm48kO4Rzin9hdjjWyHGKsueu-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hHMyhIh2kKzuOL3ydJCryDQx51w8Xr20qkny1EoJYIDiHvzfsogRKyWSKFKWODDmQ/Walnut+Cookies.jpg')
    ];

  
    constructor(){}

    ngOnInit(){
  }
   
    addRecipe(){
        this.recipes.push(new Recipe('Test Recipe', 'This is a test recipe', 'https://images.squarespace-cdn.com/content/v1/5ade3e0e89c172449f88ac65/1614124509238-DZRBXSDATGWCUGTMHQM3/ke17ZwdGBToddI8pDm48kO4Rzin9hdjjWyHGKsueu-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hHMyhIh2kKzuOL3ydJCryDQx51w8Xr20qkny1EoJYIDiHvzfsogRKyWSKFKWODDmQ/Walnut+Cookies.jpg'));       
    }


}