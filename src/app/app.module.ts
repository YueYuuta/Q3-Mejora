import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './views/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CustomButtonComponent } from './components/molecules/custom-button/custom-button.component';
import { CustomInputComponent } from './components/molecules/custom-input/custom-input.component';
import { CustomSelectComponent } from './components/molecules/custom-select/custom-select.component';
import { CustomLabelComponent } from './components/atoms/custom-label/custom-label.component';
import { CustomErrorMessageComponent } from './components/atoms/custom-error-message/custom-error-message.component';
import { SearchFilterPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardComponent,
    PlayerComponent,
    ModalComponent,
    HeaderComponent,
    FormComponent,
    CustomButtonComponent,
    CustomInputComponent,
    CustomSelectComponent,
    CustomLabelComponent,
    CustomErrorMessageComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
