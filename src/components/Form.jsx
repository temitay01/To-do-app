import Button from "./Button";

function InputForm({ onChange, value, onClick }) {
  return (
    <form className="input-form" onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Add Your Task Here"
        value={value}
        onChange={onChange}
      />
      <Button handleClick={onClick} name="Add" />
    </form>
  );
}

export default InputForm;
