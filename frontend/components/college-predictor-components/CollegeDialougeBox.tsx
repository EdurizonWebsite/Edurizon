import React,{useState,useEffect} from "react";

type CollegeDetailDialogProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    college: any; // Replace `any` with an appropriate type if available
    isGovernment: boolean;
    isManagement: boolean;
  };
  

export default function CollegeDetailDialouge({isOpen,setIsOpen,college,isGovernment,isManagement}: CollegeDetailDialogProps){
    const closeDialog = () => {
        setIsOpen(false);
      };
    
      return (
        <div className='absoute overflow-y-hidden inset-0 fixed bg-opacity-50 bg-gray-900 flex justify-center items-center'>
            
            {/* <div className=' w-[94%] bg-white rounded-[2vw] p-[2vw]'>
                <div className='relative flex flex-row gap-[2vw] justify-center items-center'>
            <h4 className='text-h4Text  font-bold text-center'>College Details</h4>
            <div onClick={closeDialog} className='cursor-pointer absolute right-0  '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24" height="24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
            </div>
            <div className='grid grid-cols-3 gap-[1vw]'>
                <div >
                    <h5 className='text-h5Text font-bold my-[1vw]'>College Details</h5>
                    <div className='text-h6Text grid grid-cols-5 gap-[.1vw]'>
                        <div className='font-medium col-span-2'>
                            <p>Institue Name:</p>
                            <p>State:</p>
                            <p>City:</p>
                            <p>Category:</p>
                            <p>Est. Date:</p>
                        </div>
                        <div className='col-span-3'>
                            <p className=" line-clamp-1">{college["InstituteName"]}</p>
                            <p>{college["State"]}</p>
                            <p>{college["City_District"]}</p>
                            <p>{college["Category"]}</p>
                            <p>{college["DateOfEstablishment"]}</p>
                        </div>
                    </div>
                </div>
                <div >
                    <h5 className='text-h5Text font-bold my-[1vw]'>Seats and Fees Details</h5>
                    <div className='grid grid-cols-3 text-h6Text  gap-[1vw]'>
                        <div className='col-span-2 font-medium'>
                            <p>Total Seats:</p>
                            <p>{isGovernment?"Government Seats:":isManagement?"Management Seat B1:":"State Seats:"}</p>
                            <p>{isManagement?"Management Seat B2:":"Management Seats"}</p>
                            <p>NRI Seats:</p>
                            <p>tuition Fees:</p>
                            <p>NRI Fees:</p>
                        </div>
                        <div className='col-span-1'>
                            <p>{college["TotalSeats"]}</p>
                            <p>{isGovernment?college['GovernmentSeats']:isManagement?college['ManagementSeatsCatB1']:college["StateSeats"]}</p>
                            <p>{isManagement?college['ManagementSeatsCatB2']:college["ManagementSeats"]}</p>
                            <p>{college["NRISeats"]}</p>
                            <p>{college["tuitionFees"]=="N/A"?"N/A":<>₹ {college["tuitionFees"]}</>}</p>
                            <p>{college["NRIFees"]=="N/A"?"N/A":<>₹ {college["NRIFees"]}</>}</p>
                        </div>
                    </div>
                </div>
                
                <div>
                <h5 className='text-h5Text font-bold my-[1vw]'>Rank and Marks Details</h5>
                    <div className='grid grid-cols-2 text-h6Text  gap-[1vw]'>
                        <div className=' font-medium'>
                            <p>2024 Round-1 Rank:</p>
                            <p>2024 Round-1 Marks:</p>
                            <p>2024 Round-2 Rank:</p>
                            <p>2024 Round-2 Marks:</p>
                            <p>2024 Round-3 Rank:</p>
                            <p>2024 Round-3 Marks:</p>
                            <p>2023 Round-1 Rank:</p>
                            <p>2023 Round-1 Marks:</p>
                        </div>
                        <div className=''>
                            <p>{college["24RankR1"]==0?"N/A":<>{college["24RankR1"]}- {college["Category"]}</>} </p>
                            <p>{college["24MarkR1"]==0?"N/A":<>{college["24MarkR1"]}</>}</p>
                            <p>{college["24RankR2"]==0?"N/A":<>{college["24RankR2"]}- {college["Category"]}</>} </p>
                            <p>{college["24MarkR2"]==0?"N/A":<>{college["24MarkR2"]}</>}</p>
                            <p>{college["24RankR3"]==0?"N/A":<>{college["24RankR3"]}- {college["Category"]}</>} </p>
                            <p>{college["24MarkR3"]==0?"N/A":<>{college["24MarkR3"]}</>}</p>
                            <p>{college["23RankR1"]==0?"N/A":<>{college["23RankR1"]}- {college["Category"]}</>} </p>
                            <p>{college["23MarkR1"]==0?"N/A":<>{college["23MarkR1"]}</>}</p>
                        </div>
                    </div>
                </div>
            
            </div>  
            </div> */}
            <div className='w-[90%]  md:w-[60%] bg-white rounded-[2vw] p-[4vw] md:p-[2vw] text-black'>
                <div className='relative flex flex-row gap-[2vw] justify-center items-center'>
            <h4 className='w-[75%] text-mediumTextPhone md:text-h5Text  font-bold text-center'>Contact Our Counsellor for More Details Regarding this College<br/>
                <span className="text-mediumTextPhone md:text-mediumText font-normal ">Mobile Number:<a className="underline" href="tel:+918800907657">8800907657</a>, <a className="underline" href="tel:+919873381377">9873381377</a>,</span><br/>
                
                
            </h4>
            <div onClick={closeDialog} className='cursor-pointer absolute right-0  '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24" height="24" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
            </div>
            {/* <div className='grid grid-cols-3 gap-[1vw]'>
                <div >
                    <h5 className='text-h5Text font-bold my-[1vw]'>College Details</h5>
                    <div className='text-h6Text grid grid-cols-5 gap-[.1vw]'>
                        <div className='font-medium col-span-2'>
                            <p>Institue Name:</p>
                            <p>State:</p>
                            <p>City:</p>
                            <p>Category:</p>
                            <p>Est. Date:</p>
                        </div>
                        <div className='col-span-3'>
                            <p className=" line-clamp-1">{college["InstituteName"]}</p>
                            <p>{college["State"]}</p>
                            <p>{college["City_District"]}</p>
                            <p>{college["Category"]}</p>
                            <p>{college["DateOfEstablishment"]}</p>
                        </div>
                    </div>
                </div>
                <div >
                    <h5 className='text-h5Text font-bold my-[1vw]'>Seats and Fees Details</h5>
                    <div className='grid grid-cols-3 text-h6Text  gap-[1vw]'>
                        <div className='col-span-2 font-medium'>
                            <p>Total Seats:</p>
                            <p>{isGovernment?"Government Seats:":isManagement?"Management Seat B1:":"State Seats:"}</p>
                            <p>{isManagement?"Management Seat B2:":"Management Seats"}</p>
                            <p>NRI Seats:</p>
                            <p>tuition Fees:</p>
                            <p>NRI Fees:</p>
                        </div>
                        <div className='col-span-1'>
                            <p>{college["TotalSeats"]}</p>
                            <p>{isGovernment?college['GovernmentSeats']:isManagement?college['ManagementSeatsCatB1']:college["StateSeats"]}</p>
                            <p>{isManagement?college['ManagementSeatsCatB2']:college["ManagementSeats"]}</p>
                            <p>{college["NRISeats"]}</p>
                            <p>{college["tuitionFees"]=="N/A"?"N/A":<>₹ {college["tuitionFees"]}</>}</p>
                            <p>{college["NRIFees"]=="N/A"?"N/A":<>₹ {college["NRIFees"]}</>}</p>
                        </div>
                    </div>
                </div>
                
                <div>
                <h5 className='text-h5Text font-bold my-[1vw]'>Rank and Marks Details</h5>
                    <div className='grid grid-cols-2 text-h6Text  gap-[1vw]'>
                        <div className=' font-medium'>
                            <p>2024 Round-1 Rank:</p>
                            <p>2024 Round-1 Marks:</p>
                            <p>2024 Round-2 Rank:</p>
                            <p>2024 Round-2 Marks:</p>
                            <p>2024 Round-3 Rank:</p>
                            <p>2024 Round-3 Marks:</p>
                            <p>2023 Round-1 Rank:</p>
                            <p>2023 Round-1 Marks:</p>
                        </div>
                        <div className=''>
                            <p>{college["24RankR1"]==0?"N/A":<>{college["24RankR1"]}- {college["Category"]}</>} </p>
                            <p>{college["24MarkR1"]==0?"N/A":<>{college["24MarkR1"]}</>}</p>
                            <p>{college["24RankR2"]==0?"N/A":<>{college["24RankR2"]}- {college["Category"]}</>} </p>
                            <p>{college["24MarkR2"]==0?"N/A":<>{college["24MarkR2"]}</>}</p>
                            <p>{college["24RankR3"]==0?"N/A":<>{college["24RankR3"]}- {college["Category"]}</>} </p>
                            <p>{college["24MarkR3"]==0?"N/A":<>{college["24MarkR3"]}</>}</p>
                            <p>{college["23RankR1"]==0?"N/A":<>{college["23RankR1"]}- {college["Category"]}</>} </p>
                            <p>{college["23MarkR1"]==0?"N/A":<>{college["23MarkR1"]}</>}</p>
                        </div>
                    </div>
                </div>
            
            </div> */}
            </div>
        </div>
      )
    }