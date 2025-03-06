import Image from 'next/image';
import Russia from './StudyInRussia.svg';
export default function StudyInHungary() {

  return (
    <div >
      {/* Country Banner */}
     <Image alt='' className='w-full mx-auto' src={Russia} />
    </div>
  );
}
