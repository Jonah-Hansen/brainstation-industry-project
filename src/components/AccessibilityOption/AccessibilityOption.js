import Switch from '@mui/material/Switch';
import { useState } from 'react';
import './AccessibilityOption.scss';

function AccessibilityOption({ type, title, description, icon, handleSwitch, handleColor, features }) {

  const colors = ['#DB4437', '#5592F6', '#F6C333', '#57BB8B', '#5E409D', '#FF67D4', '#13662B', '#068D85']

  const name = title.split(' ')[0]
  const checked = features[name]

  const [selectedColor, setSelectedColor] = useState('')

  const colorOpacity = checked[0] ? 1 : .5


  return (

    <div className='option-row'>
      {type === 'colors' ?
        <>
          <h2 className='option-row__title'>{title}</h2>
          <Switch checked={checked[0]} name={name}
            onChange={(e) => {
              handleSwitch(e)
            }}
          />
          <div className='option-row__colors'>
            {colors.map(color =>
              <div key={color} style={{ backgroundColor: color, opacity: colorOpacity }}
                className={`option-row__color` + (selectedColor === color && checked[0] ? ' active' : '')}
                onClick={() => {
                  if (checked[0]) {
                    setSelectedColor(color)
                    handleColor(color)
                  }
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
          <Switch onChange={handleSwitch} checked={checked} name={name} />
        </>
      }
    </div>
  )
}

export default AccessibilityOption