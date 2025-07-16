import insuranceSvg from '@/assets/insurance.svg';

interface InsuranceCardProps {
  isActive?: boolean;
  title: string;
  onClick: VoidFunction;
}
export const InsuranceCard = ({
  isActive = true,
  title,
  onClick,
}: InsuranceCardProps) => {
  return (
    <div
      className={`relative flex h-24 w-24 flex-col items-center justify-between overflow-hidden rounded-2xl border border-gray-400 p-2.5 ${isActive ? 'opacity-100' : 'opacity-15'} `}
      onClick={() => {
        if (!isActive) return;
        onClick();
      }}
    >
      <img className={`h-10 w-10 ${isActive}`} src={insuranceSvg} />
      <p className="text-xs font-semibold">{title}</p>
    </div>
  );
};
