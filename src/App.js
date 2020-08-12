import React from 'react';
import './App.css';
import './components/app.css'
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Cards from './components/Cards'
import Categories from './components/Categories'
import CategoryItem from './components/CategoryItem'
import Table from './components/Table'
import Footer from './components/Footer'

let itemArray = [
  { "color":"primary",
    "title":"PRODUCTS IN DATA BASE",
    "number":"135",
    "icon":"clipboard-list"},
  { "color":"success",
    "title":"AMOUNT IN PRODUCTS",
    "number":"546.456",
    "icon":"clipboard-list"},
  { "color":"warning",
    "title":"USERS QUANTITY",
    "number":"38",
    "icon":"clipboard-list"}]

  let categories = [
    "Categoría 1",
    "Categoría 2",
    "Categoría 3",
    "Categoría 4",
    "Categoría 5",
    "Categoría 6",
  ]


function App() {
  return (
    <div id="wrapper">
      <Navbar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav />

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
            <Cards 
            items={itemArray}
            />
            </div>
            
            <div className="row">
              <Categories title="Last product in Data Base">
              
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="/images/product_dummy.svg" alt="image dummy" />
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="">View product detail</a>
								
              </Categories>

              <Categories title="Categories in data base">
                <div className="row">

                    {categories.map((cat,i) => <CategoryItem key={cat + i} title={cat} />) }
										
                </div>
              </Categories>
            </div>
            
            <h1 class="h3 mb-2 text-gray-800">All the products in the Database</h1>

            <Table />

          </div>


        </div>
        <Footer />

      </div>

    </div>
  );
}

export default App;
