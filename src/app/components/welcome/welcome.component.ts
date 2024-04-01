import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  @ViewChild('name') nameKey!: ElementRef;

  constructor(private router: Router) {}

  startTest() {
    if (!this.nameKey.nativeElement.value.replace(/\s/g, '').length)
      Swal.fire('', 'Please fill the name to start the test', 'warning');
    else {
      localStorage.setItem('name', this.nameKey.nativeElement.value);
      this.router.navigateByUrl('question');
    }
  }
}
