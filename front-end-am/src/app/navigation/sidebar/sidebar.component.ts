import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';


@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [NgScrollbarModule, MatExpansionModule, RouterLinkActive, RouterModule, RouterLink, NgClass],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    // Mat Expansion
    panelOpenState = false;
}
