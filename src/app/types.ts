export interface SearchProps {
  searchToggle: boolean;
  setSearchToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface sharedProps {
  value: string | null;
  onChange: (value: string) => void;
  handleToggler: () => void;
  searchToggle: boolean;
}

interface BookingOptions {
  instant_book: boolean;
  self_check_in: boolean;
  free_cancellation: boolean;
  allow_pets: boolean;
}
export interface Room {
  id: string;
  name: string;
  country: string;
  available_dates: string[]; // Array of date strings
  price: number;
  max_guest: number; // Note: You have both max_guest and max_guests, choose one to keep.
  images: string[]; // Array of image URLs
  room_type_categories: string[]; // Array of category strings
  bedrooms: number;
  bathrooms: number;
  amenities: string[]; // Array of amenity strings
  rating: number;
  reviews_count: number;
  booking_options: BookingOptions; // Nested BookingOptions interface
  property_type: string;
}