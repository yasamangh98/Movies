import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const CardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height="200px"></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
};
