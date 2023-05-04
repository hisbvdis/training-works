import ButtonLink from "../ButtonLink/ButtonLink.jsx";
import TextField from "../TextField/TextField";
import { useState } from "react";
import { postOrder } from "../../services/service.js";
import { useCartContext } from "../../context/CartContext/useCartContext.js";
import "./Form.scss";

const Form = () => {
  const [controls, setControls] = useState([
    {
      name: "fullName",
      value: "",
      label: "Full Name*",
      showlabel: true,
      isValid: true,
      errorMsg: "",
      validation: {
        mustValidate: true,
        rules: {
          required: true,
        },
      },
    },
    {
      name: "email",
      type: "email",
      value: "",
      label: "Your Email*",
      showlabel: true,
      isValid: true,
      errorMsg: "",
      validation: {
        mustValidate: true,
        rules: {
          required: true,
          emailFormat: true,
        },
      },
    },
    {
      name: "address",
      value: "",
      label: "Address*",
      showlabel: true,
      isValid: true,
      errorMsg: "",
      validation: {
        mustValidate: true,
        rules: {
          required: true,
        },
      },
    },
    {
      name: "phone",
      value: "",
      label: "Phone number*",
      showlabel: true,
      isValid: true,
      errorMsg: "",
      validation: {
        mustValidate: true,
        rules: {
          required: true,
          phoneNumberFormat: true,
        },
      },
    },
    {
      name: "message",
      value: "",
      label: "Message",
      showlabel: true,
      rows: 12,
      textarea: true,
      isValid: true,
      errorMsg: "",
      validation: {
        mustValidate: false,
      },
    },
  ]);


  const validateElem = (value, { mustValidate, rules }) => {
    const validResult = { isValid: true, errorMsg: "" };

    if (!mustValidate) return validResult;
    if (!rules) return validResult;

    if (rules.required) {
      if (value.trim() === "") {
        return { isValid: false, errorMsg: "Field must be filled" };
      }
    }

    if (rules.emailFormat) {
      if (!value.match(/.+@.+\..+/)) {
        return { isValid: false, errorMsg: "Wrong email format" };
      }
    }

    if (rules.phoneNumberFormat) {
      if (value.match(/[^\d-()+]/)) {
        return {
          isValid: false,
          errorMsg: "Phone number can contain only numbers and symbols: + ( ) -",
        };
      }
      if (Array.from(value.matchAll(/\d/g)).length < 11) {
        return {
          isValid: false,
          errorMsg: "Phone number must contain at least 11 numbers",
        };
      }
    }

    return validResult;
  };


  const handleChange = (value, elem) => {
    const { isValid, errorMsg } = validateElem(value, elem.validation);
    
    setControls((prev) => prev.map((control) => {
      if (control.name === elem.name) {
        return { ...control, value, isValid, errorMsg };
      } else {
        return control;
      }
    }));
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    const user = controls
      .map(({name, value}) => ({name, value}))
      .reduce((obj, {name, value}) => ({...obj, [name]: value}),{})
    // console.log( user );

    const allElemsAreValid = controls.map((elem) => {
        handleChange(elem.value, elem);
        return elem;
      })
      .every((elem) => elem.isValid === true);
    // console.log( {allElemsAreValid} );
    
    // if (allElemsAreValid) {
    //   postOrder({
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   });
    // }
  };

  return (
    <form className="form" onSubmit={(evt) => handleSubmit(evt)}>
      {controls.map((control, i) => (
        <TextField
          {...control}
          className="form__field"
          key={i}
          theme="border"
          onChange={(evt) => handleChange(evt.target.value, control)}
        />
      ))}
      <div className="form__footer">
        <ButtonLink type="submit" icon={false}>Confirm</ButtonLink>
      </div>
    </form>
  );
};

export default Form;
