import { Skeleton, SkeletonText } from "@chakra-ui/react";

export function SkeletonAnimePage() {
  return (
    <div className="mx-10 my-5 flex flex-row">
      <div>
        <Skeleton className="h-96 w-60 mb-4" />
        <Skeleton className="h-10 w-60" />
      </div>
      <div className="ml-5">
        <Skeleton className="h-10 " style={{ width: "20rem" }} />
        <div className="flex flex-row gap-5 mt-5">
          <Skeleton className="h-20 w-24" />
          <Skeleton className="h-20 w-24" />
          <Skeleton className="h-20 w-24" />
        </div>
        <SkeletonText
          noOfLines={6}
          className="h-4 mt-3"
          style={{ width: "50rem" }}
        />
      </div>
    </div>
  );
}
export function SkeletonSearchAnimePage() {
  return (
    <div className="md:mx-28 mx-7 my-10">
      <div className="flex flex-col gap-3 md:gap-10">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>
    </div>
  );
}

export function SkeletonCarousel() {
  return (
    <div className="flex gap-10 m-auto w-fit mb-5">
      <Skeleton className="md:h-80 md:w-60 h-40 w-32" />
      <Skeleton className="md:h-80 md:w-60 h-40 w-32" />
      <Skeleton className="md:h-80 md:w-60 h-40 w-32 md:block hidden" />
    </div>
  );
}
export function SkeletonSchedule() {
  return (
    <div className="flex flex-col gap-1 m-auto w-fit mb-5">
      <Skeleton className=" md:w-80 h-20 w-64" />
      <Skeleton className=" md:w-80 h-20 w-64" />
      <Skeleton className=" md:w-80 h-20 w-64" />
      <Skeleton className=" md:w-80 h-20 w-64" />
    </div>
  );
}
