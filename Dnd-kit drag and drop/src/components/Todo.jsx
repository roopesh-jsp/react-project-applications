import React, { useRef, useState } from "react";
import TaskItem from "./TaskItem";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
} from "@dnd-kit/core";

const staticTasks = [
  {
    id: 1,
    task: "learn somthing intresting",
  },
  {
    id: 2,
    task: "learn java script",
  },
  {
    id: 3,
    task: "learn React",
  },

  {
    id: 4,
    task: "revise all",
  },
];
export default function Todo() {
  const [tasks, setTasks] = useState(staticTasks);
  const inputRef = useRef();
  function handleClick() {
    if (inputRef.current.value) {
      console.log(Date.now());
      const newTask = {
        id: Date.now(),
        task: inputRef.current.value,
      };
      console.log(newTask);
      setTasks((prev) => [...prev, newTask]);
      inputRef.current.value = "";
    }
  }
  function handleDel(id) {
    const modifedTasks = tasks.filter((el) => el.id != id);

    setTasks(modifedTasks);
  }
  function handleKey(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }
  const getPos = (id) => tasks.findIndex((el) => el.id === id);
  function handleDrop(e) {
    const { active, over } = e;
    if (active.id === over.id) return;
    setTasks(() => {
      const oldPos = getPos(active.id);
      const newPos = getPos(over.id);
      return arrayMove(tasks, oldPos, newPos);
    });
  }
  const sensors = useSensor(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <div id="todo">
      <div className="input">
        <input type="text" ref={inputRef} onKeyDown={handleKey} />
        <button onClick={handleClick}>Add</button>
      </div>
      <DndContext onDragEnd={handleDrop} collisionDetection={closestCorners}>
        <div className="tasks">
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                task={task}
                onDel={handleDel}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
}
