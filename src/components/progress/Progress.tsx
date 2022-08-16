import { useEffect, useRef } from "react";
import useCanvaJs from "../../helpers/useCanvaJs";
import { Task } from "../../interface/TaskInterface";
import "./index.scss";

interface Props {
  task: Task;
}

const Progress = ({ task }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spanProcent = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    useCanvaJs(canvasRef.current, spanProcent.current, task.progress, task.status);
  }, []);

  return (
    <div className="canvas-wrap">
      <canvas id="canvas" ref={canvasRef} width="50" height="50"></canvas>
      <span id="procent" ref={spanProcent}></span>
    </div>
  );
};

export default Progress;
