import React from "react";
import { List, Item, ToggleDoneButton, DeleteButton, Content } from "./styled";
import doneImage from "./done.svg";
import deleteImage from "./delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, removeTask, toggleTaskDone } from "../tasksSlice";

const TaskList = () => {
  const { tasks, hideDoneTasks, sortDirection } = useSelector(selectTasksState);
  const dispatch = useDispatch();
  const sortedTasks = [...tasks].sort(
    (a, b) => sortDirection === "asc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
  );

  return (
    <List>
      {sortedTasks.map(({ id, name, done }) => (
        <Item
          key={id}
          hide={hideDoneTasks && done}
        >
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(id))}>
            {done && <img height={15} src={doneImage} alt="done" />}
          </ToggleDoneButton>
          <Content>
            {done ? <s>{name}</s> : name}
          </Content>
          <DeleteButton onClick={() => dispatch(removeTask(id))}>
            <img height={15} src={deleteImage} alt="delete" />
          </DeleteButton>
        </Item>
      ))}
    </List>
  )
}

export default TaskList;