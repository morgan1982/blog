import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {


    return (
        <div className="container">
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <Link className="navbar-brand" to="/Admin">General Complex Machinery</Link>
            </nav>
            <div className="jumbotron">
                <h1 className="display-4">Simple</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nam architecto vero harum, sit similique molestiae velit. Eos laborum qui voluptatem dolorem incidunt quo ipsa quidem eligendi deleniti ut, dignissimos natus provident. Voluptatibus dignissimos laboriosam facilis nulla illum dolor aperiam!</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col col-sm-12 mb-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">The game</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur temporibus, ipsam alias commodi sunt! Aspernatur molestias, explicabo in, ducimus rerum consequuntur cum nostrum ex alias sit assumenda autem blanditiis id.</p>
                            <Link className="card-link" to="/Admin">read more</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">The game</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur temporibus, ipsam alias commodi sunt! Aspernatur molestias, explicabo in, ducimus rerum consequuntur cum nostrum ex alias sit assumenda autem blanditiis id.</p>
                            <Link className="card-link" to="/Admin">read more</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col col-sm-12">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">The game</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur temporibus, ipsam alias commodi sunt! Aspernatur molestias, explicabo in, ducimus rerum consequuntur cum nostrum ex alias sit assumenda autem blanditiis id.</p>
                            <Link className="card-link" to="/Admin">read more</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-sm-4 mt-md-0">
                <div className="col-sm-12 col-md-8">
                    <h3>Express</h3>
                    <p className="lead text-sm-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officiis ex, deserunt, impedit rem vero rerum? Laborum vero hic, esse, facilis veritatis suscipit officiis natus necessitatibus deserunt ratione, fugiat neque.</p>
                    <p className="lead text-sm-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officiis ex, deserunt, impedit rem vero rerum? Laborum vero hic, esse, facilis veritatis suscipit officiis natus necessitatibus deserunt ratione, fugiat neque.</p>
                </div>
            </div>
            <div className="grid">
                <div class="cell small-4">Cell 1</div>
                <div class="cell small-4">Cell 2</div>
                <div class="cell small-4">Cell 3</div>
            </div>
        </div>

        )
}


export default Test;


