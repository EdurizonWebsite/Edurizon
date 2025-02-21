const TermsAndConditions = () => {
    return (
        <div className="mx-[7.5vw] mt-[6.25vw] mb-[20vw] text-black dark:text-white">
            <div className="w-full pb-[2.5vw] border-b-[.25vw] border-orangeChosen">
                <p className="text-center text-regularText w-full leading-[150%] mb-[.625vw] inline-block font-poppins">
                {"Home / "}
                <span className="font-semibold">Terms and conditions</span>
                </p>
                <h2 className="font-helvetica text-h2Text text-center font-bold leading-[120%]">
                    Terms and Conditions
                </h2>
            </div>
            <div className="mt-[4.625vw]">
                <ol className="mx-[.5vw]  font-poppins list-decimal pl-[1vw] text-left font-semibold">
                    <li className="text-h6Text mb-[2.5vw]">
                        <span>
                            <span className="text-h6Text font-helvetica leading-[140%]">Acceptance of Terms</span><br/>
                            <span className="text-regularText leading-[150%] font-normal">
                            By accessing and using this website, you acknowledge and agree to abide by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of our services immediately.
                            </span>
                        </span>
                    </li>
                    <li className="text-h6Text mb-[2.5vw]">
                        <span>
                            <span className="text-h6Text font-helvetica leading-[140%]">Services Offered</span><br/>
                            <span className="text-regularText leading-[150%] font-normal">
                            We provide consultation for studying abroad, including university selection, application assistance, visa support, and financial aid guidance. The information provided on this website is for general guidance and does not guarantee admission or visa approval.
                            </span>
                        </span>
                    </li>
                    <li className="text-h6Text mb-[2.5vw]">
                        <span>
                            <span className="text-h6Text font-helvetica leading-[140%]">User Responsibilities</span><br/>
                            <span className="text-regularText leading-[150%] font-normal">
                            {"> You must provide accurate and complete information during the consultation and application process."}<br/>
                             {"> Any misuse of our website or services may result in suspension of access."}
                            </span>
                        </span>
                    </li>
                    <li className="text-h6Text mb-[2.5vw]">
                        <span>
                            <span className="text-h6Text font-helvetica leading-[140%]">Payment & Refund Policy</span><br/>
                            <span className="text-regularText leading-[150%] font-normal">
                            {"> Some services may require payment. Fees are non-refundable unless explicitly stated otherwise."}<br/>
                            {"> Payment for third-party services (e.g., university applications, visa fees) is governed by their respective policies."}
                            </span>
                        </span>
                    </li>
                    <li className="text-h6Text mb-[2.5vw]">
                        <span>
                            <span className="text-h6Text font-helvetica leading-[140%]">Privacy Policy</span><br/>
                            <span className="text-regularText leading-[150%] font-normal">
                            {"Your personal data is handled in accordance with our Privacy Policy. We do not sell or share your data with unauthorized parties."}<br/>
                            </span>
                        </span>
                    </li>
                    <li className="text-h6Text mb-[2.5vw]">
                        <span>
                            <span className="text-h6Text font-helvetica leading-[140%]">Limitation of Liability</span><br/>
                            <span className="text-regularText leading-[150%] font-normal">
                            {"We are not responsible for university admission decisions, visa rejections, or any third-party actions. Our role is strictly advisory."}<br/>
                            </span>
                        </span>
                    </li>
                    <li className="text-h6Text mb-[2.5vw]">
                        <span>
                            <span className="text-h6Text font-helvetica leading-[140%]">Changes of Terms</span><br/>
                            <span className="text-regularText leading-[150%] font-normal">
                            We reserve the right to modify these Terms and Conditions at any time. Continued use of our website implies acceptance of any changes.For any questions regarding our terms, contact us at <a className="underline text-[#0048ff]" href="mailto:support@edurizonpvtltd.in">support@edurizonpvtltd.in</a><br/>
                            </span>
                        </span>
                    </li>
                    
                </ol>
            </div>

        </div>
    )
}

export default TermsAndConditions;