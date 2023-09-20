// import uniqid from 'uniqid'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LaunchIcon from '@material-ui/icons/Launch'
import './CertificationContainer.css'


const CertificationContainer = ({ certification }) => (
  <div className='certification'>
    <img
      src={certification.image} // Assuming 'certification.image' contains the URL of the image
      alt={certification.name}// You can set an appropriate alt text
      className='certification__image'
    />
    <h3>{certification.name}</h3>
    <p className='certification_date'>{certification.date}</p>
    

    {certification.linkedin && (
      <a
        href={certification.linkedin}
        aria-label='source code'
        className='link link--icon'
      >
        <LinkedInIcon />
      </a>
    )}

    {certification.accreditation && (
      <a
        href={certification.accreditation}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default CertificationContainer
