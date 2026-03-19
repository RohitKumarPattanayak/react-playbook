import { useEffect, useState } from "react"


const ImgSlider = () => {
    const dummyImages = [
    "https://www.clipartmax.com/png/full/144-1442578_flat-person-icon-download-dummy-man.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhZaVb1gUHWFi3YNYnIbMsaJxhXXQx1bmRpT2xu7lSw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NXXfGKXcfqImNRN52I5aTHABctC60tvvs63eRtSClA&s"
    ]
    const [ActiveIndex, setAIndex] = useState(0)
    const handleNext = ()=>{
        const i = ActiveIndex + 1
        setAIndex(i%dummyImages.length)
    }
    const handlePrev = ()=>{
        const i = ActiveIndex - 1
        console.log(i)
        i < 0 ? setAIndex(dummyImages.length-1) : setAIndex(i)        
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setAIndex(prev => (prev + 1) % dummyImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex items-center justify-center gap-4 my-8">
            <button 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-md text-xl"
                onClick={handlePrev}
            >
                &larr;
            </button>
            <div className="relative w-64 h-64 overflow-hidden rounded-2xl shadow-lg bg-gray-100 border-4 border-white">
                {dummyImages.map((imgUrl, index) => (
                    <img 
                        key={index}
                        src={imgUrl} 
                        alt={`slide-${index}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            index === ActiveIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>
            <button 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-md text-xl"
                onClick={handleNext}
            >
                &rarr;
            </button>
        </div>
    );
}

export default ImgSlider;