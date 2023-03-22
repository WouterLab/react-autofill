import s from "./SubmitButton.module.scss";

const SubmitButton = () => {
  return (
    <button className={s.button} type='submit'>
      Submit Form
    </button>
  );
};

export default SubmitButton;
