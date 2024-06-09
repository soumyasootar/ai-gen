"use client";
import { useRecoilState } from "recoil";
import { BorderBeam } from "../magicui/borderbeam";
import { Badge } from "../ui/badge";
import { bioAtom } from "../recoil/BioAtom";
import { Skeleton } from "../ui/skeleton";
import CopyLabel from "./CopyLabel";

const Output = () => {
  const [bio, setBio] = useRecoilState(bioAtom);

  return (
    <div className="relative flex min-h-[50vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5">
      <Badge variant="outline" className="absolute top-3 right-3 z-50">
        Output
      </Badge>
      {bio.loading && (
        <BorderBeam
          size={1000}
          borderWidth={2}
          duration={10}
          className="z-10"
        />
      )}

      {/* <BorderBeam size={1000} borderWidth={2} duration={10} className="z-10"/> */}
      {/* <Skeleton className="w-full h-full bg-primary/10" /> */}

      {bio.loading ? (
        <>
          <Skeleton className="w-full h-full bg-primary/10" />{" "}
        </>
      ) : (
        <>
          <ul className="flex flex-col items-start justify-start space-y-8 sm:space-y-12 p-8 py-12 xs:p-8 xs:py-12 sm:p-12 lg:p-16">
            {bio.output?.map((data: any, index: any) => {
              return (
                <li
                  key={index}
                  className="w-full text-sm xs:text-base border border-primary/20 rounded-md p-4 relative bg-background rounded-br-none"
                >
                  {data.name}
                  <span className="absolute top-[99%] right-0">
                    <CopyLabel text={data.name} />
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Output;
