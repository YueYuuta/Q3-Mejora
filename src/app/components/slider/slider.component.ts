import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SliderComponent,
      multi: true,
    },
  ],
})
export class SliderComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  private destroySubject = new Subject();
  @Input()
  public label: string = '';
  inputRange = new FormControl('0');
  onChange: Function = (value: string) => {};
  onTouch: Function = () => {};

  constructor() {}
  ngOnDestroy(): void {
    this.destroySubject.complete();
  }

  ngOnInit(): void {
    this.readChangeInputRange();
  }
  private readChangeInputRange(): void {
    this.inputRange.valueChanges
      .pipe(takeUntil(this.destroySubject))
      .subscribe((data: string) => {
        this.onChange(data);
        this.onTouch(data);
      });
  }

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: any) {
    if (!value) {
      this.inputRange.setValue('0');
    } else {
      this.inputRange.setValue(value);
    }
  }

  /* When the value in the UI is changed, this method will invoke a callback function */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
}

// antiguo
// import { Component, Input } from '@angular/core';
// import {
//   ControlValueAccessor,
//   FormControl,
//   NG_VALUE_ACCESSOR,
// } from '@angular/forms';

// @Component({
//   selector: 'app-slider',
//   templateUrl: './slider.component.html',
//   styleUrls: ['./slider.component.scss'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: SliderComponent,
//       multi: true,
//     },
//   ],
// })
// export class SliderComponent implements ControlValueAccessor {
//   input: FormControl = new FormControl();
//   @Input()
//   public label: string = '';
//   field = '0';

//   constructor() {}

//   onChange: any = (value: string) => {};
//   onTouch: any = () => {};

//   // This will will write the value to the view if the the value changes occur on the model programmatically
//   writeValue(value: any) {
//     let defaultValue = '0';
//     if (value) {
//       defaultValue = value;
//     }
//     this.input.setValue(defaultValue);
//     this.onChange(defaultValue);
//   }

//   /* When the value in the UI is changed, this method will invoke a callback function */
//   registerOnChange(fn: Function) {
//     this.onChange = fn;
//   }

//   // When the element is touched, this method will get called
//   registerOnTouched(onTouched: Function) {
//     this.onTouch = onTouched;
//   }
// }
