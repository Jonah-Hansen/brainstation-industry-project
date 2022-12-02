import Switch from '@mui/material/Switch';
import { useState } from 'react';
import './AccessibilityOption.scss';

function AccessibilityOption({ type, title, description, icon, handleSwitch, handleColor, features }) {

  const colors = ['#DB4437', '#5592F6', '#F6C333', '#57BB8B', '#5E409D', '#FF67D4', '#13662B', '#068D85']

  const [selectedColor, setSelectedColor] = useState('')

  return (

    <div className='option-row'>
      {type === 'colors' ?
        <>
          <h2 className='option-row__title'>{title}</h2>
          <Switch />
          <div className='option-row__colors'>
            {colors.map(color =>
              <div key={color} style={{ backgroundColor: color }}
                className={`option-row__color` + (selectedColor === color ? ' active' : '')}
                onClick={() => {
                  setSelectedColor(color)
                  handleColor(color)
                }}
              />)}
          </div>
        </>
        :
        <>
          <div className='option-row__icon--bubble'>
            <img className='option-row__icon' src={icon} alt={`${title} icon`} />
          </div>
          <hgroup className='option-row__details'>
            <h2 className='option-row__title'>{title}</h2>
            <p className='option-row__description'>{description}</p>
          </hgroup>
          <Switch onChange={handleSwitch} checked={features[title.split(' ')[0]]} name={title.split(' ')[0]} />
        </>
      }
    </div>
  )
}

export default AccessibilityOption