import { Service } from "../types/service";

/**
 * Mock services service
 */
export const servicesService = {
  /**
     * Get all services
     */
    async getServices(): Promise<Service[]> {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return [
        {
          id: "1",
          name: "Haircut",
          price: 30.0,
          description: "A stylish haircut",
          durationInMinutes: 30,
        },
        {
          id: "2",
          name: "Haircut w/ Foil Razor & Beard Trim",
          price: 50.0,
          description: "A stylish haircut with a foil razor and beard trim",
          durationInMinutes: 45,
          signatureCuts: ["tapered cut", "foil razor finish"],
        },
        {
          id: "1",
          name: "Beard Trim(no haircut)",
          price: 25.0,
          description: "A stylish beard trim without a haircut",
          durationInMinutes: 30,
          imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
    }
};
