export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  icon: string;
}

export interface Barber {
  id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  photo: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  photo: string;
}

export interface Booking {
  id?: string;
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt?: Date;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'haircut' | 'beard' | 'interior' | 'before-after';
}
