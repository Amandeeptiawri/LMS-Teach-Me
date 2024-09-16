import HeaderComponent from '../Components/page_header/HeaderComponent';
import './Contact.css';


function Contact() {
    return (
        <>
            <HeaderComponent item1='Contact Us'></HeaderComponent>
            <section className='contact-bg' style={{ fontFamily: 'sans-serif' }}>

                <div className='container-fluid'>
                    <div className='container  '>
                        <div className='row'>
                            <div className='col-lg-5  col-md-12 mt-3 pt-3 '>
                                <h4 className='fs-1 pt-4 fw-500'>Contact Information</h4>

                                <div className='contact-icon d-flex flex-column mt-4 pt-2'>
                                    <div className='icon-bg d-flex gap-3'>
                                        <i class="bi bi-telephone">

                                        </i>
                                        <h4>Phone Number:</h4>

                                    </div>

                                    <p className='contact-info mx-5'>+001 123 456 789, +002 321 654 987</p>

                                    <div className='icon-bg d-flex gap-3 mt-3'>
                                        <i class="bi bi-envelope"></i>
                                        <h4>Email Address:</h4>
                                    </div>
                                    <p className='contact-info mx-5 '>exampleinfo@gmail.com</p>


                                    <div className='icon-bg d-flex gap-3 mt-3'>
                                        <i class="bi bi-geo-alt"></i>
                                        <h4>Store Location:</h4>
                                    </div>
                                    <p className='contact-info mx-5'>26 South Street, New York, NY 98, USA.</p>



                                </div>


                            </div>


                            {/* form */}

                            <div className='col-lg-7 col-md-12 mt-4 pt-4'>


                                <div className="container mt-2">
                                    <h1 className='fs-1'>What can we do for you?</h1>
                                    <p style={{ color: ' #61636A' }}>Your email address is safe with us. Required fields are noted with <strong>*</strong></p>

                                    <form id="contactForm">
                                        <div className="row g-3">

                                            <div className="col-md-6">
                                                <label for="firstName" className="form-label">First Name</label>
                                                <div className="input-group">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" required></input>
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <label for="email" class="form-label">Email Address</label>
                                                <div class="input-group">
                                                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                                    <input type="email" class="form-control" id="email" placeholder="Email Address" required></input>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label for="phone" class="form-label">Phone Number</label>
                                                <div className="input-group">
                                                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                                    <input type="tel" className="form-control" id="phone" placeholder="Phone Number" required></input>
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <label for="subject" className="form-label">Subject</label>
                                                <div className="input-group">
                                                    <span className="input-group-text"><i className="fas fa-file-alt"></i></span>
                                                    <input type="text" className="form-control" id="subject" placeholder="Subject" required></input>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label for="message" class="form-label">Write Your Message</label>
                                                <textarea className="form-control" id="message" rows="4" placeholder="Write Your Message" required></textarea>
                                            </div>


                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="remember"></input>
                                                    <label className="form-check-label" for="remember">
                                                        Remember my details for future comments.
                                                    </label>
                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <button type="submit" class="btn btn-success">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>



                        </div>



                    </div>


                </div>

                <div className='container mt-5 pt-3 mb-5'>
                    <div className='row'>
                        <div className='map'>
                            
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18906.129712753736!2d6.722624160288201!3d60.12672284414915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463e997b1b6fc09d%3A0x6ee05405ec78a692!2sJ%C4%99zyk%20trola!5e0!3m2!1spl!2spl!4v1672239918130!5m2!1spl!2spl" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                        </div>

                    </div>
                </div>

            </section>
        </>
    );

}


export default Contact;