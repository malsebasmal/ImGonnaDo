import Section from "@/components/Section"
import CardList from "@/components/CardList"
import Title from "@/components/Title"

function GroupsPage() {
  return (
    <Section className="gap-10">
      <Title />
      <div className="w-full flex flex-col gap-4">
        <CardList />
        <CardList />
      </div>
    </Section>
  )
}

export default GroupsPage