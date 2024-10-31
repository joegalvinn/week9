type HelloProps = {
  name: string;
  age: number;
};

export function Hello(props: HelloProps) {
  return (
    <div>
      Hello {props.name} who is {props.age}
    </div>
  );
}
