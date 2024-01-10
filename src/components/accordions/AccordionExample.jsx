import { useState } from 'react'
import openeddropdown from '../../assets/opened-dropdown.svg'
import closeddropdown from '../../assets/closed-dropdown.svg'
import { updateAccordionTriggerAriaAttributes } from 'aria-ease'

const AccordionExample = () => {
  const[isAccordionShown, setIsAccordionShown] = useState([
    {display: false, closedAriaLabel: 'Expand information on how to make appointment', openedAriaLabel: 'Collapse information on how to make appointment'},
    {display: false, closedAriaLabel: 'Expand information on how to get copy of records', openedAriaLabel: 'Collapse information on how to get copy of records'},
    {display: false, closedAriaLabel: 'Expand information on extra charge for copy of records', openedAriaLabel: 'Collapse information on extra charge for copy of records'}
  ])

  const handleAccordionClick = (event, index) => {
    if (event.type === 'mousedown' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
      event.preventDefault();
      setIsAccordionShown((prevStates) => {
        const newStates = prevStates.map((state, i) => ({
          ...state,
          display: i === index ? !state.display : false,
        }));
        updateAccordionTriggerAriaAttributes(newStates, 'dropdown-button', index);
        return newStates;
      });
    }
  };
      
  return (
    <div className='faq-div'>
            <div className='faq-each-div'>
                <button id='make-an-appointment' className='dropdown-button block-interactive' onKeyDown={(event) => handleAccordionClick(event, 0)} onMouseDown={(event) => handleAccordionClick(event, 0)} aria-pressed={false} aria-expanded={false} aria-label='Expand information on how to make appointment'>
                    <span className='dropdown-heading-text'>How do I make an appointment?</span>
                    {isAccordionShown[0].display ? 
                        <img src={openeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img> :
                        <img src={closeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img>
                    }
                </button>
                {isAccordionShown[0].display ? 
                    <div className='faq-each-text-div'>
                        <p>If you would like to make an appointent with any one of our practitioners, please contact our reception staff. Alternatively you can book an appointment online. Every effort will be made to accomodate your preferred time and choice of practitioner</p>
                    </div> : 
                    null
                }
            </div>

            <div className='faq-each-div'>
                <button id='copy-of-record' className='dropdown-button block-interactive' onKeyDown={(event) => handleAccordionClick(event, 1)} onMouseDown={(event) => handleAccordionClick(event, 1)} aria-pressed={false} aria-expanded={false} aria-label='Expand information on how to get copy of records'>
                    <span className='dropdown-heading-text'>How do I get a copy of my record?</span>
                    {isAccordionShown[1].display ? 
                        <img src={openeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img> :
                        <img src={closeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img>
                    }
                </button>
                {isAccordionShown[1].display ? 
                    <div className='faq-each-text-div'>
                        <p>If you would like to get a copy of your record, please contact our customer support team. Alternatively you can come into the hospital.</p>
                    </div> : 
                    null
                }
            </div>

            <div className='faq-each-div'>
                <button id='extra-charge' className='dropdown-button block-interactive' onKeyDown={(event) => handleAccordionClick(event, 2)} onMouseDown={(event) => handleAccordionClick(event, 2)} aria-pressed={false} aria-expanded={false} aria-label='Expand information on extra charge for copy of record'>
                    <span className='dropdown-heading-text'>Is there a charge for extra copies?</span>
                    {isAccordionShown[2].display ? 
                        <img src={openeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img> :
                        <img src={closeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img>
                    }
                </button>
                {isAccordionShown[2].display ? 
                    <div className='faq-each-text-div'>
                        <p>The first copy is free and subsequent copies cost $1 per copy. This cost covers printing and mailing.</p>
                    </div> : 
                    null
                }
            </div>
        </div>
  )
}

export default AccordionExample