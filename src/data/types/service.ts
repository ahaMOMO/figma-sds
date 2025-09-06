/**
 * Service types
 */
export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  durationInMinutes: number;
  imageUrl?: string;
  signatureCuts?: string[];
};
