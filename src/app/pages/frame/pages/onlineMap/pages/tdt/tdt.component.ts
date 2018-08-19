import { Component } from '@angular/core';
import Viewer = Cesium.Viewer;
import ViewerOptions = Cesium.ViewerOptions;
import Globe = Cesium.Globe;
import Scene = Cesium.Scene;
import { SelectItem } from 'primeng/primeng';
import { TiandituMapsImageryProvider, TiandituMapsStyle } from 'e-ngx-cesium';

@Component({
	templateUrl: './tdt.component.html',
	styleUrls: ['./tdt.component.scss']
})
export class TdtComponent {
	viewerOptions: ViewerOptions;
	viewer: Viewer;
	scene: Scene;
	globe: Globe;
	servers: SelectItem[];
	selectedServer: TiandituMapsImageryProvider;

	constructor() {
		this.viewerOptions = {
			imageryProvider: new TiandituMapsImageryProvider(TiandituMapsStyle.IMG_W)
		};
		this.servers = [
			{label: '--选择服务类型--', value: null},
			{label: '全球影像地图服务（经纬度投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.IMG_C)},
			{label: '全球影像地图服务（墨卡托投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.IMG_W)},
			{label: '全球地形晕渲服务（经纬度投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.TER_C)},
			{label: '全球地形晕渲服务（墨卡托投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.TER_W)},
			{label: '全球矢量地图服务（经纬度投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.VEC_C)},
			{label: '全球矢量地图服务（墨卡托投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.VEC_W)},
			{label: '全球影像中文注记服务（经纬度投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.CIA_C)},
			{label: '全球影像中文注记服务（墨卡托投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.CIA_W)},
			{label: '全球影像英文注记服务（经纬度投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.EIA_C)},
			{label: '全球影像英文注记服务（墨卡托投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.EIA_W)},
			{label: '全球地形中文注记服务（经纬度投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.CTA_C)},
			{label: '全球地形中文注记服务（墨卡托投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.CTA_W)},
			{label: '全球矢量中文标注服务（经纬度投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.CVA_C)},
			{label: '全球矢量中文标注服务（墨卡托投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.CVA_W)},
			{label: '全球矢量英文标注服务（经纬度投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.EVA_C)},
			{label: '全球矢量英文标注服务（墨卡托投影）', value: new TiandituMapsImageryProvider(TiandituMapsStyle.EVA_W)}
		];
	}

	onViewerReady(evt: any) {
		this.viewer = evt.viewer;
		this.scene = evt.scene;
		this.globe = evt.globe;
	}

	serverChange($event) {
		this.viewer.imageryLayers.removeAll();
		let tdtImageryProvider: TiandituMapsImageryProvider;
		if ($event.value) {
			tdtImageryProvider = $event.value;
		} else {
			tdtImageryProvider = new TiandituMapsImageryProvider(TiandituMapsStyle.IMG_W);
		}
		this.viewer.imageryLayers.addImageryProvider(tdtImageryProvider);
	}
}

