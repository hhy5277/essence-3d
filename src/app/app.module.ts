import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		DropdownModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
