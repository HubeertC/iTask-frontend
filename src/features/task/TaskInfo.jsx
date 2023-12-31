import React from "react";
import { Container } from "./TaskInfoStyle";

import { useParams } from "react-router";
import { useGetTaskByIdQuery } from "./taskApiSlice";
import Loading from "../../components/Loading";
import ErorrPage from "../../components/ErorrPage";
import useTitle from "../../hooks/useTitle";
import CurrentTaskInfo from "./CurrentTaskInfo";

const TaskInfo = () => {
  useTitle("Task");
  const { taskId } = useParams();

  const {
    data: singleTaskData,
    isLoading,
    refetch,
    isError,
    error,
  } = useGetTaskByIdQuery(taskId, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnSuccess: true,
  });

  if (isLoading) return <Loading wrapHeight={"100vh"} />;
  if (isError || error) return <ErorrPage error={error} />;

  return (
    <Container>
      {singleTaskData &&
        singleTaskData.ids.map((id) => {
          const entity = singleTaskData.entities[id];

          return <CurrentTaskInfo key={id} entity={entity} refetch={refetch} />;
        })}
    </Container>
  );
};

export default TaskInfo;
