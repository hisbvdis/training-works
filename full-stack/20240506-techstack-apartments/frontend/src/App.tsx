import { create } from "mutative";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Button from "./components/Button/Button.tsx";
import Card from "./components/Card/Card.tsx";
import Control from "./components/Control/Control.tsx";
import Rent from "./components/Rent/Rent.tsx";
import "./styles/common.css";
import "./styles/globals.css";


export default function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const formInit = {name: "", rooms: "1", price: "100", description: ""};
  const [formState, setFormState] = useState<IForm>(formInit);
  const [flats, setFlats] = useState<IApartment[]>();

  const handleChange = (e:ChangeEvent) => {
    e.preventDefault();
    setFormState(create(formState, (draft) => {
      const target = e.target as HTMLInputElement;
      draft[target.name] = target.value;
    }));
  }

  const handleFormSubmit = async (e:FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/apartments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState),
    });
    setFormState(formInit);
    await getData();
  }

  const handleChangeRent = async (id:string) => {
    const flat = flats?.find((flat) => flat.id === id);
    await fetch(`http://localhost:3000/apartments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...flat, is_rented: !flat?.is_rented}),
    });
    await getData();
  }

  const handleDeleteRent = async (id:string) => {
    await fetch(`http://localhost:3000/apartments/${id}`, { method: "DELETE" });
    await getData();
  }

  const getData = async () => {
    setFlats(await fetch("http://localhost:3000/apartments").then((r) => r.json()));
  }

  useEffect(() => {(async () => {
    await getData();
  })()}, [])

  return (
    <main>
      <h1>Apartments Marketplace</h1>

      <section className="section">
        <header className="section__header">
          <h2 className="section__heading">😁Create a new rent</h2>
        </header>
        <Card style={{backgroundColor: "#e8eaed"}}>
          <form className="createForm" onSubmit={handleFormSubmit} ref={formRef}>
            <h3 className="srOnly">Creating form</h3>
            <Control label="Name">
              <input type="text" name="name" value={formState["name"]} onChange={handleChange} placeholder="Ex. Flat in the city center" required maxLength={99}/>
            </Control>
            <Control label="Rooms">
            <input type="number" name="rooms" value={formState["rooms"]} onChange={handleChange} required min={1}/>
            </Control>
            <Control label="Price">
              <input type="number" name="price" value={formState["price"]} onChange={handleChange} min={1} step="1" placeholder="99" required/>
            </Control>
            <Control label="Description">
              <input type="text" name="description" value={formState["description"]} onChange={handleChange} maxLength={999}/>
            </Control>
            <Button className="createForm__button">Submit rent</Button>
          </form>
        </Card>
      </section>

      <section className="section">
        <header className="section__header">
          <h2 className="section__heading">😀Your current rent</h2>
        </header>
        {flats?.filter((flat) => flat.is_rented).map((flat) => (
          <Card key={flat.id}>
            <Rent {...flat} handleChangeRent={handleChangeRent} handleDeleteRent={handleDeleteRent}/>
          </Card>
        ))}
      </section>

      <section className="section">
        <header className="section__header">
          <h2 className="section__heading">🏠Availible Apartments ({flats?.filter((flat) => !flat.is_rented).length})</h2>
          <Control>
            <select>
              <option>Price: Lowest First</option>
              <option>Price: Highest First</option>
 i           </select>
          </Control>
        </header>
        {flats?.filter((flat) => !flat.is_rented).map((flat) => (
          <Card key={flat.id}>
            <Rent {...flat} handleChangeRent={handleChangeRent} handleDeleteRent={handleDeleteRent}/>
          </Card>
        ))}
      </section>
    </main>
  )
}

interface IForm {
  [key:string]:string;
}

interface IApartment {
  id:string;
  name:string;
  rooms:number;
  price:number;
  description:string;
  is_rented:boolean;
}