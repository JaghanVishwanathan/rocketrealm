import { Component, OnInit, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface ImageData {
  src: string;
  title?: string;
  location?: string;
  date?: string;
  aircraft?: string;
}

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit, AfterViewInit, OnDestroy {
  images: ImageData[] = [];
  selectedImage: ImageData | null = null;
  lightboxOpen = false;
  showNavigation = true;
  private lastScrollY = 0;
  private scrollTimeout: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Sample image data - user will replace with actual images
    this.images = [
      {
        src: 'assets/photos/photo-1.jpg',
        location: 'Sanicole Airshow, Belgium',
        date: '15.10.2025',
        aircraft: 'Boeing '
      },
      {
        src: 'assets/photos/photo-2.jpg',
        location: 'Kehl, Germany',
        date: '22.06.2025',
        aircraft: 'Dassault Rafale M'
      },
      {
        src: 'assets/photos/photo-3.jpg',
        location: 'Dubai Air Show 2023',
        date: '13.11.2023',
        aircraft: 'Lockheed Martin F-16 Fighting Falcon Block 60'
      },
      {
        src: 'assets/photos/photo-4.jpg',
        location: 'Dubai Air Show 2023',
        date: '13.11.2023',
        aircraft: 'Lockheed Martin F-16 Fighting Falcon Block 60'
      }
      // {
      //   src: 'assets/photos/photo-5.jpg',
      //   location: 'Seattle, WA',
      //   date: '2024-05-12',
      //   aircraft: 'Boeing 777-300ER'
      // }
    ];
  }

  ngAfterViewInit() {
    // Set up intersection observer for fade-in animations after view is initialized
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      // Scrolling down - hide navigation
      this.showNavigation = false;
    } else if (currentScrollY < this.lastScrollY) {
      // Scrolling up - show navigation
      this.showNavigation = true;
    }

    this.lastScrollY = currentScrollY;
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all image cards
    const cards = document.querySelectorAll('.image-card');
    cards.forEach(card => observer.observe(card));
  }

  openLightbox(image: ImageData) {
    this.selectedImage = image;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  navigateImage(direction: 'prev' | 'next', event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    
    if (!this.selectedImage) return;

    const currentIndex = this.images.findIndex(img => img.src === this.selectedImage!.src);
    let newIndex: number;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % this.images.length;
    } else {
      newIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    }

    this.selectedImage = this.images[newIndex];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: Event) {
    if (!this.lightboxOpen) return;

    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === 'Escape') {
      this.closeLightbox();
    } else if (keyboardEvent.key === 'ArrowRight') {
      this.navigateImage('next');
    } else if (keyboardEvent.key === 'ArrowLeft') {
      this.navigateImage('prev');
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
