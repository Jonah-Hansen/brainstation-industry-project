import { useState } from 'react'
import AccessibilityOption from '../AccessibilityOption/AccessibilityOption'
import './confirm.scss'

function Confirm({ setIsConfirm, oldFeatures, enabledFeatures, setEnabledFeatures }) {


  const handleCancel = () => {
    setEnabledFeatures(oldFeatures)
    setIsConfirm(false)
  }

  const handleDone = () => {
    setIsConfirm(false)
  }

  const handleSwitch = (event) => {
    const newFeatures = { ...enabledFeatures }
    newFeatures[event.target.name.split(' ')[0]] = event.target.checked
    setEnabledFeatures(newFeatures)
  }

  let chosenFeatures = [];
  for (const key in enabledFeatures) {
    if (key.includes('Title') && enabledFeatures.Title[0]) {
      chosenFeatures.push(['Title Colors', enabledFeatures[key][1]])
    } else if (!key.includes('Title') && enabledFeatures[key]) {
      let title;
      switch (key) {
        case 'Blind': title = key + ' Users Friendly'; break;
        case 'ADHD': title = key + ' Friendly'; break;
        case 'Vision': title = key + ' Impaired Friendly'; break;
        case 'Seizure': title = key + ' Safe'; break;
        case 'Cognitive': title = key + ' Disability Friendly'; break;
        case 'Dark': title = key + ' Contrast'; break;
        case 'Light': title = key + ' Contrast'; break;
        case 'Bionic': title = key + ' Reading'; break;
        case 'Content': title = key + ' Spacing'; break;
        case 'Adjust': title = key + ' Font Sizing'; break;
        case 'Highlight': title = key + ' Titles'; break;
        case 'Text': title = key + ' Magnifier'; break;
        default: title = 'unknown feature'
      }
      chosenFeatures.push(title)
    }
  }


  return (
    <main className='confirm'>
      <div className='confirm__preview' />
      <section className='confirm__dialog'>
        <header className='confirm__header'>
          <button className='confirm__back' onClick={handleCancel}>
            <span className='confirm__back-text'>back</span>
          </button>
          <h1 className='confirm__title'>Preview</h1>
          <button className='confirm__done' onClick={handleDone} >Confirm</button>
        </header>
        {chosenFeatures.map(title =>
          title[0].includes('Title') ? <AccessibilityOption key={title[0]} mini={true} title={title[0]} type={'colors'} previewColor={title[1]} features={enabledFeatures} />
            : <AccessibilityOption key={title} mini={true} features={enabledFeatures} title={title} handleSwitch={handleSwitch} />
        )}
      </section>
    </main>
  )
}


export default Confirm