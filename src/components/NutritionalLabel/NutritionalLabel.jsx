import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  const {item}=props
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item?.item_name}</h4>

      <ul className="fact-list">{
        nutritionFacts.map((items) =>{
          
        return <NutritionalLabelFact
          label ={items.label}
          key = {items.id}
          attribute={items.attribute}
          item={item}
          
          
          
          />
          })}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  let term = props.item?.[props.attribute]
  let flabel = props.label
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{flabel}</span>{" "}
      <span className="fact-value">{term}</span>
    </li>
  )
}

export default NutritionalLabel
