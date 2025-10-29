const FooterComponent = () => {
    const year = new Date().getFullYear(); // dapatkah tahun sekarang 
    return (
        
        <div>
            <p className="bg-amber-50 dark:bg-gray-900 dark:text-white text-center p-4">
                {year} © All Rights Reserved by Vincent
            </p>
        </div>
    )
}

export default FooterComponent;