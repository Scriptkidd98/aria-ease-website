import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const SlideOutNav = ({page}) => {
  return (
    <div className="slide-out-nav-outer-div">
      <Link to='/' className={`side-nav-link ${(page === 'home') ? 'active-nav-link' : ''}`}>Home</Link>
      <div className="slide-nav-links-section">
        <p>Documentation</p>
        <Link to='/docs' aria-label='Navigate to the documentation page' className={`side-nav-link ${(page === 'documentation') ? 'active-nav-link' : ''}`}>Introduction</Link>
      </div>
      <div className="slide-nav-links-section">
        <p>Components</p>
        <div className="slide-out-nav-div">
          <Link to='/examples/accordion' aria-label="View accordion examples" className={`side-nav-link ${(page === 'accordions') ? 'active-nav-link' : ''}`}>Accordion</Link>
          <Link to='/examples/block' aria-label="View block examples" className={`side-nav-link ${(page === 'tab') ? 'active-nav-link' : ''}`} style={{marginTop: '12px'}}>Block</Link>
          <Link to='/examples/checkbox' aria-label="View checkbox examples" className={`side-nav-link ${(page === 'checkbox') ? 'active-nav-link' : ''}`} style={{marginTop: '12px'}}>Checkbox</Link>
          <Link to='/examples/menu' aria-label="View menu examples" className={`side-nav-link ${(page === 'menu') ? 'active-nav-link' : ''}`} style={{marginTop: '12px'}}>Menu</Link>
          <Link to='/examples/radio' aria-label="View radio examples" className={`side-nav-link ${(page === 'radio') ? 'active-nav-link' : ''} ${(window.innerWidth >= 992) ? 'block-interactive' : ''}`} style={{marginTop: '12px'}}>Radio</Link>
          <Link to='/examples/toggle-button' aria-label="View toggle button examples" className={`side-nav-link ${(page === 'toggle-button') ? 'active-nav-link' : ''} ${(window.innerWidth >= 992) ? 'block-interactive' : ''}`} style={{marginTop: '12px'}}>Toggle Button</Link>
        </div>
      </div>
    </div>
  )
}

export default SlideOutNav