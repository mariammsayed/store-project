import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { FooterComponent } from "./layout/footer/footer.component";
import { NgxSpinnerComponent } from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Store';
  private readonly _flowbite = inject(FlowbiteService);
  ngOnInit(): void {
    this._flowbite.loadFlowbite(() => {
      initFlowbite();
    });
    
  }
}
