import Section from "@/components/Section"
import CardList from "@/components/CardList"
import Title from "@/components/Title"
import Button from "@/components/Button"
import useFetch from "@/api/useFetch"
import LoadingIcon from "@/icons/LoadingIcon"

function GroupsPage() {
  const { data, loading } = useFetch(import.meta.env.VITE_LISTS_API_URL)

  return (
    <Section className="gap-10">
      <Title />
      <div className="w-full flex">
        <ul className="w-full flex flex-col gap-4 h-96 overflow-auto">
          {loading && <LoadingIcon color="pink"/>}
          {data.map((list) => (
            <li key={list._id}>
              <CardList id={list._id} name={list.name} description={list.description} />
            </li>
          ))}
        </ul>
      </div>
      <Button className="w-full bg-cGreen text-cWhite hover:bg-cWhite hover:text-cGreen font-bold text-xl rounded-full py-2 px-3" text="add list"/>
    </Section>
  )
}

export default GroupsPage