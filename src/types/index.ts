export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  url: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

export interface Technology {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  field: string;
  description: string;
  captcha: boolean;
}

export interface Value {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
