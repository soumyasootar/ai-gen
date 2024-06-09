"use client"
import { useRecoilState } from "recoil"
import { BorderBeam } from "../magicui/borderbeam"
import { Badge } from "../ui/badge"
import { bioAtom } from "../recoil/BioAtom"
import { Skeleton } from "../ui/skeleton"

const Output = () => {
  const [bio, setBio] = useRecoilState(bioAtom)

  return (
    <div className="relative flex min-h-[50vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5">
      
      <Badge variant="outline" className="absolute top-3 right-3 z-50">Output</Badge>
      {bio.loading && <BorderBeam size={1000} borderWidth={2} duration={10} className="z-10"/>}
      <Skeleton/>
      {bio.loading ? <> </> : <></>}
    </div>
  )
}

export default Output