import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <div>
      <div className='d-flex gap-4 mt-4'>
       <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href='https://www.instagram.com/problemsolving.consultancy1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
           target='_blank'  rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1' href='https://api.whatsapp.com/send?phone=9361868543' 
            target='_blank' rel="noopener noreferrer">
            <SiWhatsapp />
          </a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'> <FaYoutube /></a>
        </div>
      </div>
      <div className='d-flex gap-4 mt-4'>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'><FaLinkedin /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'><FaXTwitter /></a>
        </div>
        <div className='media-icons bg-white d-flex justify-content-center align-items-center'>
          <a className='fs-5 navcolor pb-1'><FaFacebookF /></a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
