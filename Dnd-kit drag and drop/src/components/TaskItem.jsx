import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function TaskItem({ id, task, onDel }) {
  const { listeners, attributes, transform, transition, setNodeRef } =
    useSortable({ id });
  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      id="taskItem"
      ref={setNodeRef}
      style={styles}
      {...attributes}
      {...listeners}
    >
      <span>
        <input type="checkbox" className="checkbox" />
        {task.task}
      </span>
      <button className="del" onClick={() => onDel(task.id)}>
        DEL
      </button>
    </div>
  );
}
