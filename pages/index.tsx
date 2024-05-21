import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
// import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';




const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      

      <section className="section" style={{ margin: "35px" }}>
        <div className="container ">
          <header className="section__intro">
            <h4><b>How It Work!</b></h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-search"></i>
              <div className="data-item__content">
                <h4>Search</h4>
               <p>Sign up now and enjoy a free fitness consultation on memberships over $199!</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>View Profile</h4>
                <p>Access your fitness stats and progress anytime securely.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Review</h4>
                <p>Love our gym? Leave a review and help others join the fitness journey!</p>
              </div>
            </li>
            
            
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage