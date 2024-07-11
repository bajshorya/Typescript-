import "./App.css";

function App() {

  return (
    <>
      <div>
        <Todo title="code" description="do coding" done={true} />
      </div>
    </>
  );
}
interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}
const Todo = (props: TodoProp) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.done ? "Done" : "Not Done"}</h3>
    </div>
  );
};
export default App;
