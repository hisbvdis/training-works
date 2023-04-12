import Container from "../Container/Container";
import Field from "../../components/Field/Field";
import OptionGroup from "../../components/OptionGroup/OptionGroup";
import Radio from "../../components/Radio/Radio";
import Upload from "../../components/Upload/Upload";
import Button from "../../components/Button/Button";
import "./Form.scss";

const Form = () => {
  return (<>
    <form className="form" id="signup" aria-labelledby="form-title">
      <Container>
        <h2 className="heading  from__heading" id="form-title">Working with POST request</h2>
        <div className="form__inner">
          <Field className="form__field" type="text" id="name" name="name" label="Your name"/>
          <Field className="form__field" type="email" id="email" name="email" label="Email"/>
          <Field className="form__field  form__last" type="tel" id="phone" name="phone" label="Phone"/>
          <OptionGroup name="position" heading="Select your position">
            <Radio value="front">Frontend developer</Radio>
            <Radio value="back">Backend developer</Radio>
            <Radio value="design">Designer</Radio>
            <Radio value="qa">QA</Radio>
          </OptionGroup>
          <Upload className="form__field"/>
          <Button type="submit" onClick={(evt) => evt.preventDefault()}>Sign up</Button>
        </div>
      </Container>
    </form>
  </>)
}

export default Form;