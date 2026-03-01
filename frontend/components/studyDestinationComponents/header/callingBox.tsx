import Image from "next/image"
export default function CallingBox() {
    const callBtnFnc=()=>{
        window.location.href = "tel:+919873381377"
    }
    const whatsappBtnFnc=()=>{
        window.open('https://wa.me/919873381377?')
    }
    return (
        <div className='absolute right-0 bottom-[2vw] flex gap-[8px] text-white text-smallTextPhone md:text-regularText font-semibold'>
        <button onClick={callBtnFnc} className='bg-orangeChosen md:h-auto md:rounded-[.675vw] p-[10px]'>+91 98733 81377</button>
        <button onClick={whatsappBtnFnc} className='bg-orangeChosen  md:h-auto  md:rounded-[.675vw] flex items-center justify-center p-[10px] gap-[2vw] md:gap-[.5vw] '>
            <Image src={"/assets/Images/Icons/whatsapp.png"} alt='whatsapp' className='w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw]' width={40} height={40} /> +91 98733 81377</button>
    </div>
    )
}