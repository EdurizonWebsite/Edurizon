const termsAndConditions = [
    {
        title: "Acceptance of Terms",
        content: "By accessing and using this website, you acknowledge and agree to abide by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of our services immediately."
    },
    {
        title: "Services Offered",
        content: "We provide consultation for studying abroad, including university selection, application assistance, visa support, and financial aid guidance. The information provided on this website is for general guidance and does not guarantee admission or visa approval."
    },
    {
        title: "User Responsibilities",
        content: [
            "You must provide accurate and complete information during the consultation and application process.",
            "Any misuse of our website or services may result in suspension of access."
        ]
    },
    {
        title: "Payment & Refund Policy",
        content: [
            "Some services may require payment. Fees are non-refundable unless explicitly stated otherwise.",
            "Payment for third-party services (e.g., university applications, visa fees) is governed by their respective policies."
        ]
    },
    {
        title: "Privacy Policy",
        content: "Your personal data is handled in accordance with our Privacy Policy. We do not sell or share your data with unauthorized parties."
    },
    {
        title: "Limitation of Liability",
        content: "We are not responsible for university admission decisions, visa rejections, or any third-party actions. Our role is strictly advisory."
    },
    {
        title: "Changes of Terms",
        content: <>We reserve the right to modify these Terms and Conditions at any time. Continued use of our website implies acceptance of any changes. For any questions regarding our terms, contact us at <a className="underline text-[#0048ff]" href="mailto:support@edurizonpvtltd.in">support@edurizonpvtltd.in</a></>
    }
];


const TermsAndConditions = () => {
    return (
        <div className="mx-[7.5vw] mt-[6.25vw] mb-[20vw] text-black dark:text-white">
            <div className="w-full pb-[2.5vw] border-b-[.25vw] border-orangeChosen">
                <p className="text-center text-regularText w-full leading-[150%] mb-[.625vw] inline-block ">
                {"Home / "}
                <span className="font-semibold">Terms and conditions</span>
                </p>
                <h2 className="  text-h2Text text-center font-bold leading-[120%]">
                    Terms and Conditions
                </h2>
            </div>
            <div className="mt-[4.625vw]">
            <ol className="mx-[.5vw]  list-decimal pl-[1vw] text-left font-semibold">
            {termsAndConditions.map((item, index) => (
                <li key={index} className="text-h6Text mb-[2.5vw]">
                    <span>
                        <h6 className="text-h6Text leading-[140%]">{item.title}</h6>
                        <span className="text-regularText leading-[150%] font-normal">
                            {Array.isArray(item.content) ? (
                                item.content.map((point, i) => <span key={i}>{"> " + point}<br/></span>)
                            ) : (
                                <>{item.content}</>
                            )}
                        </span>
                    </span>
                </li>
            ))}
        </ol>
            </div>

        </div>
    )
}

export default TermsAndConditions;