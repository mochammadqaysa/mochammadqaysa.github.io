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
    date: "2022 - Present",
    title: "Bachelor of Informatics",
    description:
      "Indonesian University of Informatics and Business.",
  },
  {
    id: 2,
    date: "2018-2021",
    title: "Major in Software Engineering",
    description:
      "Assalaam Vocational School Bandung.",
  },
]
const EducationTimeLine = () => {
  return (
    <Timeline defaultValue={3}>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="rounded-none!"
      >

        <h1 className="text-2xl font-bold mb-6">Education</h1>
      </GradientText>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle className="text-sm md:text-xl">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
};

export default EducationTimeLine;
