import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	formDataDiri : FormGroup;

	ngOnInit() {
		this.formDataDiri = new FormGroup({
			nama : new FormControl('',Validators.required),
			alamat : new FormControl(''),
			jenisKelamin : new FormControl('')
		});
	} 

	onSubmit() : void {
		console.log(this.formDataDiri.value);
	}
}
