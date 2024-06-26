import { makeMenuAccessible, updateMenuTriggerAriaAttributes, cleanUpMenuEventListeners } from 'aria-ease'

const HomeExampleMenu = () => {
  const toggleMenuDisplay = (event) => {
    if (event.type === 'mousedown' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
      event.preventDefault();
      const menu = document.querySelector('#custom-menu');
      if (getComputedStyle(menu).display === 'none') {
        menu.style.display = 'block';
        makeMenuAccessible('custom-menu', 'profile-menu-item');
        updateMenuTriggerAriaAttributes('display-button', 'Close profile menu');
      } else {
        cleanUpMenuEventListeners('custom-menu', 'profile-menu-item');
        menu.style.display = 'none';
        updateMenuTriggerAriaAttributes('display-button', 'Open profile menu');
      }
    }
  };

  return (
    <div className='mt-2 mb-3'>
      <button
        id="display-button"
        onMouseDown={toggleMenuDisplay}
        aria-haspopup={true}
        role="button"
        aria-expanded={false}
        aria-controls="custom-menu"
        aria-label="Open profile menu"
        className='home-menu-example-trigger-button block-interactive'
        onKeyDown={toggleMenuDisplay}
      >
        Display Example Menu
      </button>
      <div id="custom-menu" role="menu" aria-labelledby="display-button" style={{display: 'none', marginTop: '5px'}}>
        <button role="menuitem" className="profile-menu-item" onClick={() => alert('Button clicked')} aria-label='Go to page one'>One</button>
        <button role="menuitem" className="profile-menu-item" onClick={() => alert('Button clicked')} aria-label='Go to page two'>Two</button>
        <button role="menuitem" className="profile-menu-item" onClick={() => alert('Button clicked')} aria-label='Go to page three'>Three</button>
      </div>
    </div>
  )
}

export default HomeExampleMenu