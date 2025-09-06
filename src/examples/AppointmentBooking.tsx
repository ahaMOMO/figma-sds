import { ServiceItemCard, ServiceItemCardSkeleton } from "compositions";
import { servicesService } from "data/services/servicesService";
import { Service } from "data/types/service";
import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";
import { TextContentHeading } from "primitives";
import type { FC } from "react";
import { useEffect, useState } from "react";
import "./appointmentbooking.css";

export const AppointmentBooking: FC = () => {
  const [services, setServices] = useState<Service[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "800" : "1600";

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
    <Section
      padding={sectionPadding}
      className="appointment-booking-section"
      variant="subtle"
    >
      <Flex direction="column" alignSecondary="stretch" gap={"1200"}>
        <TextContentHeading
          heading="Book an appointment"
          subheading="We offer several services at Joe’s Barbershop"
          className="appointment-booking-heading"
        />
        {loading ? (
          <>
            <ServiceItemCardSkeleton />
            <ServiceItemCardSkeleton />
            <ServiceItemCardSkeleton />
            <ServiceItemCardSkeleton />
          </>
        ) : (
          services?.map((service, i) => {
            return (
              <ServiceItemCard
                key={"ServiceCard-" + service.id}
                id={service.id}
                heading={service.name}
                price={service.price}
                duration={service.durationInMinutes}
                imageUrl={service.imageUrl}
                signatureCuts={
                  service.signatureCuts?.length
                    ? service.signatureCuts?.join(", ")
                    : ""
                }
              />
            );
          })
        )}
      </Flex>
    </Section>
  );
};

export default AppointmentBooking;
