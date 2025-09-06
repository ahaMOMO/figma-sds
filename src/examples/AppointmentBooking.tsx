import { servicesService } from "data/services/servicesService";
import { Service } from "data/types/service";
import { Flex, Section } from "layout";
import { TextContentHeading } from "primitives";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { ServiceItemCard } from "compositions";
import "./appointmentbooking.css";

export const AppointmentBooking: FC = () => {
  const [services, setServices] = useState<Service[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const data = await servicesService.getServices();
        if (!mounted) return;
        setServices(data);
      } catch (err) {
        console.error("Failed to load services", err);
        if (mounted) setServices([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Section padding={"1600"} className="appointment-booking-section" variant="subtle">
      <Flex direction="column" alignSecondary="stretch" gap={"1200"}>
        <TextContentHeading
          heading="Book an appointment"
          subheading="We offer several services at Joe’s Barbershop"
          className="appointment-booking-heading"
        />
        {services?.map((service, i) => {
          return (
            <ServiceItemCard 
                key={"ServiceCard-" + service.id}  
                id={service.id}
                heading={service.name} 
                price={service.price} 
                duration={service.durationInMinutes}
                imageUrl={service.imageUrl}
                signatureCuts={service.signatureCuts?.length ? service.signatureCuts?.join(", ") : ""}    
            />
          );
        })}
      </Flex>
    </Section>
  );
};

export default AppointmentBooking;
