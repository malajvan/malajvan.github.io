import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experiences.css'

const Experiences = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section experiences'>
      <h2 className='section__title'>Experiences</h2>

      <div className='experiences__grid'>
        {experiences.map((e) => (
          <ExperienceContainer key={uniqid()} experience={e} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
