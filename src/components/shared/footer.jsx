function Footer({ showForgotPin = true, colorScheme = "blue" }) {
    const isBlue = colorScheme === "blue";
    const borderColor = isBlue ? "border-blue-500" : "border-green-500";
    const textColor = isBlue ? "text-blue-200" : "text-green-200";
    
    return (
        <div>
            {/* Card Footer */}
            <div className={`flex justify-between items-center pt-2 border-t ${borderColor} border-opacity-30 ${textColor} text-s`}>
                {showForgotPin && (
                    <div className="flex items-center hover:text-white">
                        <button>FORGOT PIN?</button>
                    </div>
                )}                
            </div>
        </div>
        
    );
}

export default Footer;



