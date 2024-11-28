import { Spinner } from "flowbite-react";

function LoadingIcon({color} : {color: string}) {
  return (
    <Spinner color={color}/>
  )
}

export default LoadingIcon