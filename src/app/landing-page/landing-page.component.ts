import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;
  images: string[] = [];
  private imageChangeInterval: any;
  private imageLoadInterval = 5000; // 5 seconds

  constructor(private router: Router) {}

  ngOnInit() {
    // Load images from assets/photos folder
    // For now, using placeholder paths - user will add actual images
    this.images = [
      'assets/photos/landing-1.jpg',
      'assets/photos/landing-2.jpg',
      'assets/photos/landing-3.jpg',
      'assets/photos/landing-4.jpg'
    ];

    this.startImageRotation();
  }

  ngOnDestroy() {
    if (this.imageChangeInterval) {
      clearInterval(this.imageChangeInterval);
    }
  }

  startImageRotation() {
    this.imageChangeInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, this.imageLoadInterval);
  }

  enterShowcase() {
    this.router.navigate(['/showcase']);
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      event.preventDefault();
      this.enterShowcase();
    }
  }
}
