import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrandingGifComponent } from "./tranding-gif.component";

const routes: Routes = [{ path: "", component: TrandingGifComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrandingGifRoutingModule {}
