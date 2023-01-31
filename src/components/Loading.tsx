import { PortalLayout } from "./PortalLayout";
import Image from "next/image"


export default function Loading() {
  return (
    <>
      <PortalLayout>
        <Image className="m-auto h-full" src={"/Spinner.svg"} alt={""} height={200} width={200}/>
      </PortalLayout>
    </>
  )
}