import { Component, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { SelectOption } from '../../../models/select-option';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true,
    },
  ]
})
export class SelectComponent {

  @Input() label: String = "This is an input"
  @Input() valid: boolean = false
  @Input() options!: Array<SelectOption>


  //CONTROL VALUE ACCESSORS ATTRIBUTES.
  input!: string
  onChange: any = () => { }
  onTouched: any = () => { }
  isDisabled!: boolean

  //CONTROL VALUE ACCESSORS METHODS.
  writeValue(input: string): void {
    this.input = input
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

}
