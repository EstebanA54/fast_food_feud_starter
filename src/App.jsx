import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import Chip from "./components/Chip/Chip"
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import { useState } from "react"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const[selectedCategory,setSelectedCategory] = useState()
  const[selectedResturant,setSelectedResturant] = useState()
  const[selectedMenuItem,setSelectedMenuItem] = useState()

  let currentMenu  = data.filter((items) => {
    return items.food_category === selectedCategory && items.restaurant == selectedResturant
  }
  )
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
           
          {categories.map((items) =>{
            let active = (items == selectedCategory ? true : false)
          return <Chip
            label ={items}
            key = {items}
            chip={items}
            category={selectedCategory}
            isActive={active}
            onClick={() =>{
              setSelectedCategory(items)
            }
            }
            >
          </Chip> 
          })}

          
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        <Header header = {appInfo}/> 

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
          {restaurants.map((items) =>{
            let active = (items == selectedResturant ? true : false)
          return <Chip
            label ={items}
            key = {items}
            chip={items}
            category={selectedResturant}
            isActive={active}
            onClick={() =>{
              setSelectedResturant(items)
            }
            }
            >
          </Chip> 
          })}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions = {appInfo}/>
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenu.map((items,i) =>{
            let active = (items.item_name == selectedMenuItem ? true : false)
          return <Chip
            label ={items.item_name}
            key = {i}
            chip={items.item_name}
            category={selectedMenuItem}
            isActive={active}
            onClick={() =>{
              setSelectedMenuItem(items)
            }
            }
            >
          </Chip> 
          })}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
            selectedMenuItem ? <NutritionalLabel item={selectedMenuItem}/> : null
          }</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
