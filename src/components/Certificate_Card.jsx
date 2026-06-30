const Certificate_Card = ({ c }) => {
  const Icon = c.icon;
  return (
    <div className="bg-card border border-theme rounded-2xl p-6 card-hover cursor-default group">
      <div className="border border-theme w-fit p-3 rounded-xl text-icon mb-4 group-hover:text-accent transition-colors duration-300">
        <Icon size={24} />
      </div>
      <p className="text-muted text-xs font-bold tracking-wider uppercase mb-2">{c.issuer}</p>
      <h3 className="text-heading text-lg font-bold mb-3 leading-snug">{c.title}</h3>
      <p className="text-sm text-body leading-relaxed">{c.description}</p>
    </div>
  );
};

export default Certificate_Card;
