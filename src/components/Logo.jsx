import AOS from 'aos';
const Logo = ({color}) => {
  AOS.init()
  return (
    <>
        <div data-aos="flip-down"  data-aos-duration="3000" className='text-black dark:text-white flex flex-col text-xl'>
            <code className={color}>{'<Pedro'}</code>
            <code className='text-blue-600 dark:text-orange-600 ml-5 md:ml-7'>{'Marques/>'}</code>
        </div>
    </>
  )
}

export default Logo