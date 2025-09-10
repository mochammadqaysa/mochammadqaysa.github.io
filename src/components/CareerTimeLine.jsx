import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"
import GradientText from "./GradientText/GradientText";

const items = [
  {
    id: 1,
    date: "Dec 2024 - Present",
    title: "Import Export Staff",
    description:
      "PT. Tiara Indoprima",
    job: [
      "Handled export-import operations and documentation.",
      "Coordinated logistics and submission to Indonesia's Directorate General of Customs.",
      "Ensured compliance with export regulations and shipment accuracy."
    ],
  },
  {
    id: 2,
    date: "Sep 2024 - Present",
    title: "Information Technology Staff",
    description:
      "PT. Tiara Indoprima",
    job: [
      "Developed internal Laravel-based inventory systems for export-import reporting.",
      "Coordinated logistics and submission to Indonesia's Directorate General of Customs.",
      "Ensured compliance with export regulations and shipment accuracy."
    ],
  },
  {
    id: 3,
    date: "Jan 2023 - Aug 2024",
    title: "iOS Developer",
    description:
      "PT. Digital Amore Kriyanesia",
    job: [
      "Built native iOS applications using Swift and SwiftUI.",
      "Focused on user interface design and API integration.",
    ],
  },
  {
    id: 4,
    date: "Jan 2022 - Aug 2024",
    title: "Android Developer (Native & Flutter)",
    description:
      "PT. Digital Amore Kriyanesia",
    job: [
      "Developed Android apps using both Java/Kotlin and Flutter.",
      "Implemented MVVM architecture, Firebase, Bluetooth printer, and REST API.",
      "Published multiple apps to Google Play Store.",
    ],
  },
  {
    id: 5,
    date: "Jan 2022 - Aug 2024",
    title: "Back End Developer (Java - Spring Boot)",
    description:
      "PT. Digital Amore Kriyanesia",
    job: [
      "Built REST APIs using Spring Boot for various application services.",
      "Used Spring Boot and PostgreSQL for scalable backend services.",
      "Integrated Telegram/WhatsApp API for system notifications.",
    ],
  },
  {
    id: 6,
    date: "Oct 2021 - Aug 2024",
    title: "Full Stack Developer",
    description:
      "PT. Digital Amore Kriyanesia",
    job: [
      "Integrated Telegram/WhatsApp API for system notifications.",
      "Managed both backend logic and frontend interface.",
      "Handled deployments, maintenance, and client feature requests.",
    ],
  },
]
const CareerTimeLine = () => {
  return (
    <Timeline defaultValue={3}>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="rounded-none! mx-0"
      >

        <h1 className="text-2xl font-bold mb-6">Professional Experience</h1>
      </GradientText>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle className="text-sm md:text-xl">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>
            {item.description}
          </TimelineContent>
          {
            item.job.map((job, index) => (
              <TimelineContent key={index} className="text-white mt-2 rounded-lg border px-4 py-3">
                {job}
              </TimelineContent>
            ))
          }
        </TimelineItem>
      ))}
    </Timeline>
  )
};

export default CareerTimeLine;
