import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneComponent } from './scene.component';
import { SceneRoutingModule } from './scene.routes';
import { RollerShuttersComponent } from './pages/roller-shutters/roller-shutters.component';
import { ModeSwitchComponent } from './pages/mode-switch/mode-switch.component';
import { DropdownModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { UnderGroundComponent } from './pages/under-ground/under-ground.component';
import { RenderEffectComponent } from './pages/render-effect/render-effect.component';
import { PositionInfoComponent } from './pages/position-info/position-info.component';
import { DynamicWaterComponent } from './pages/dynamic-water/dynamic-water.component';
import { CZMLComponent } from './pages/czml/czml.component';
import { ENgxCesiumModule } from 'e-ngx-cesium';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SceneRoutingModule,
		ENgxCesiumModule,
		DropdownModule
	],
	declarations: [
		SceneComponent,
		RollerShuttersComponent,
		ModeSwitchComponent,
		UnderGroundComponent,
		RenderEffectComponent,
		PositionInfoComponent,
		DynamicWaterComponent,
		CZMLComponent
	]
})
export class SceneModule {}
