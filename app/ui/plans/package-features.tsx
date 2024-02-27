export default function PackageFeatures({ features }: { features: Array<string> }) {

    return <div className="pt-[25px] px-[25px] pb-[35px]" >
        
    
        {
        features.map(feature => {
            return <div className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                {feature}
            </div>
        })


    }
    </div>
}


   

   
