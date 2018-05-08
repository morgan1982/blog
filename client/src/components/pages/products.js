import React, { Component } from 'react';
import Customers from '../customers/customers';




class Products extends Component {


    render () {

        return (
            <div className="container-fluid">
                <h1>Products</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptatibus, quibusdam fugiat sit soluta eius error nulla dolor voluptates neque, ipsum rem nesciunt eum dicta pariatur expedita facilis, minus iusto similique! Ut vero dolore sapiente nostrum laboriosam, veniam quaerat aperiam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt quod est ad! Architecto placeat, animi nostrum tempora earum impedit molestias eaque id suscipit reiciendis repellat velit aperiam quod delectus.</p>
                <Customers />
            </div>
            
        );
        
    }
}


export default Products;