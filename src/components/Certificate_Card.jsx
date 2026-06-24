const Certificate_Card = ({ c }) => {
    const Icon  = c.icon;
    return (
        <div className="bg-[#1E1E1E]/30 border border-white/20 shadow-sm shadow-gray-800 hover:bg-[#1E1E1E] rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:border-[#818CF8]">
            <div className="border border-white/20 w-fit py-2 px-3 rounded-full text-white mb-2">
            <Icon size={30}/>
            </div>

            <h3 className="text-[#494e57] text-md mb-4">{c.issuer}</h3>
            <h2 className="text-[#ebebed] text-xl font-bold mb-4">{c.title}</h2>
            <p className='text-sm text-[#535969] mb-4'>{c.description}</p>
        </div>
    )
}

export default Certificate_Card
