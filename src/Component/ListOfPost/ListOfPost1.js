import react, { Component } from 'react'
import '../ListOfPost/ListOfPost.css'

class ListOfPost1 extends Component {
    render() {
        return (
            <div>
                <div className='background'>
                    {/* Jumbotron */}
                    <div id="intro" className="p-5 text-center bg-light">
                        <h1 className="mb-3 h1">{/*context*/}MIỀN BẮC NƯỚC TA</h1>                        
                    </div>
                    {/* Jumbotron */}
                    {/*Main Navigation*/}
                    {/*Main layout*/}
                    <main className="my-5">
                        <div className="container">
                            {/*Grid row*/}
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-md-9 mb-4">
                                    {/*Section: Content*/}
                                    <section>
                                        {/* Post */}
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-8 mb-4">
                                                <h5>Very long post title</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                                                    necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam
                                                    minus ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos
                                                    magni.
                                                </p>
                                                <button type="button" className="btn btn-primary">Read</button>
                                            </div>
                                        </div>
                                        {/* Post */}
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                                    <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-8 mb-4">
                                                <h5>Very long post title</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                                                    necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam
                                                    minus ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos
                                                    magni.
                                                </p>
                                                <button type="button" className="btn btn-primary">Read</button>
                                            </div>
                                        </div>
                                        {/* Post */}
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                                    <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-8 mb-4">
                                                <h5>Very long post title</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                                                    necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam
                                                    minus ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos
                                                    magni.
                                                </p>
                                                <button type="button" className="btn btn-primary">Read</button>
                                            </div>
                                        </div>
                                        {/* Post */}
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                                    <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-8 mb-4">
                                                <h5>Very long post title</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
                                                    necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam
                                                    minus ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos
                                                    magni.
                                                </p>
                                                <button type="button" className="btn btn-primary">Read</button>
                                            </div>
                                        </div>
                                    </section>
                                    {/*Section: Content*/}
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-md-3 mb-4">
                                    {/*Section: Sidebar*/}
                                    <section className="sticky-top" style={{ top: '80px' }}>
                                        {/*Section: Ad*/}
                                        <section className="text-center border-bottom pb-4 mb-4">
                                            <div className="bg-image hover-overlay ripple mb-4">
                                                <img src="https://image.thanhnien.vn/w2048/Uploaded/2021/bfznsfyr.bn/2020_10_15/lazada_czno.jpg" className="img-fluid" />
                                                <a href="#" target="_blank">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }} />
                                                </a>
                                            </div>
                                            
                                        </section>
                                        {/*Section: Ad*/}
                                        {/*Section: Video*/}
                                        <section className="text-center">
                                            <h5 className="mb-4">Đôi nét miền Bắc</h5>
                                            <div className="embed-responsive embed-responsive-16by9 shadow-4-strong">
                                                
                                                <iframe width="708" height="398" src="https://www.youtube.com/embed/7IzSEyvW8DE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </section>
                                        {/*Section: Video*/}
                                    </section>
                                    {/*Section: Sidebar*/}
                                </div>
                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                            {/* Pagination */}
                            <nav className="my-4" aria-label="...">
                                <ul className="pagination pagination-circle justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#">1<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </main>
                    {/*Main layout*/}
                    {/*Footer*/}
                    <footer className="bg-light text-lg-start">
                       
                        <hr className="m-0" />
                        <div className="text-center py-4 align-items-center">
                            <p>Theo dõi chúng tôi trên</p>
                            <a href="#" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                                <i className="fab fa-youtube" />
                            </a>
                            <a href="#" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                                <i className="fab fa-facebook-f" />
                            </a>
                            
                           
                        </div>
                        {/* Copyright */}
                        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            © 2021 Copyright:
                            <a className="text-dark" href="#">TRAVELLER</a>
                        </div>
                        {/* Copyright */}
                    </footer>
                    {/*Footer*/}
                </div>
            </div>

        )
    }
}
export default ListOfPost1