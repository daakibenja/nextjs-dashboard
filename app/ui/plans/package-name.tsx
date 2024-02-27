export default function PackageName({ name }: { name: string }) {
    return <div>
        <div className="pt-[15px] px-[25px] pb-[25px]">
            <div className="flex justify-end">
                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                        Pro
                    </p>
                </div>
            </div>

            <div>
                <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    {name}
                </p>
               
            </div>


        </div>
    </div>
}