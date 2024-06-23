import { data } from "../data/data.js";
import Accordion1 from "./components/accordion-1/accordion1.jsx";
import Accordion2 from "./components/accordion2/accordion2.jsx";
import classes from "../src/components/accordion2/accordion2.module.css";
import Accordion2Item from "./components/accordion2/accordion2Item.jsx";
function App() {
  return (
    <>
      {/** type 1     *****************************    */}
      <Accordion1 data={data} />

      {/** type 2   *************************** */}
      <Accordion2 className={classes.accordion}>
        <Accordion2Item title="first one" id="1">
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, explicabo. Quam adipisci sequi tenetur libero amet
              quia quaerat reprehenderit eaque doloremque, beatae, dolorem
              cumque ullam iure minima! Dolorem, nobis quis.
            </p>
          </article>
        </Accordion2Item>
        <Accordion2Item title="second one" id="2">
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, explicabo. Quam adipisci sequi tenetur libero amet
              quia quaerat reprehenderit eaque doloremque, beatae, dolorem
              cumque ullam iure minima! Dolorem, nobis quis.
            </p>
          </article>
        </Accordion2Item>
        <Accordion2Item title="third one" id="3">
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, explicabo. Quam adipisci sequi tenetur libero amet
              quia quaerat reprehenderit eaque doloremque, beatae, dolorem
              cumque ullam iure minima! Dolorem, nobis quis.
            </p>
          </article>
        </Accordion2Item>
      </Accordion2>
    </>
  );
}

export default App;
