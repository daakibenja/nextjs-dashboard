export default function PackageHeadline({ tagline }: { tagline: string }) {
    return <div>
        <div>
            <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                {tagline}
            </p>
        </div>
    </div>
}