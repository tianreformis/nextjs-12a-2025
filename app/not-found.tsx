import Image from "next/image";
const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-row gap-2">
                <Image
                    src="/404.png"
                    alt="Not Found"
                    width={300}
                    height={300}
                />
                <Image
                    src="/404.png"
                    alt="Not Found"
                    width={300}
                    height={300}
                />
            </div>


        </div>
    )
}

export default ErrorPage;